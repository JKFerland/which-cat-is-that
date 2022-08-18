import "./Home.css";
import React, { useEffect, useState } from "react";
import { styled } from '../stitches.config';
import { API } from "aws-amplify";

function getGame() {
    return API.get("game", "/game");
}

export default function Home() {
    const [options, setOptions] = useState();
    useEffect(() => {
        async function onLoad() {
            try {
                const game = await getGame();
                setOptions(Object.values(game.options));
            } catch (e) {
                // onError(e);
            }
        }
        onLoad();
    }, []);
    const updateOptions = (name) => {
        const newState = options?.map((option) => {
            if (option.name === name) {
                return { ...option, selected: !option.selected };
            }
            return option;
        });
        setOptions(newState);
    };
    let today = new Date().toLocaleDateString().split("/").join(":");
    today = encodeURIComponent(today).concat(".JPG");


    return (
        <div className="Home">
            <Cat src={`https://whichcatisthat-whichcatisthat-catsbucket8932fb36-1vzp08fjbynx5.s3.us-west-1.amazonaws.com/7:27:2022.JPG`} />
            <SquareContainer>
                {options && options.map((option, index) => {
                    if (option.selected) {
                        return (<Square isCorrect={options[index].isName}>{option.name}</Square>);
                    }
                    return (<Square onClick={() => updateOptions(option.name)}>{option.name}</Square>)
                })}
            </SquareContainer>
        </div >
    );

}

const Cat = styled('img', {
    height: '15rem',
    width: '15rem',
    backgroundColor: '#D9D9D9',
    alignSelf: 'center',
    '@tablet': {
        height: '20.625rem',
        width: '20.625rem',
    },
});

const SquareContainer = styled('div', {
    display: 'grid',
    marginTop: '29px',
    alignSelf: 'center',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr',
    gap: '29px 29px',
    gridTemplateAreas:
        `'. .',
    '. .'`,
})

const Square = styled('div', {
    height: '6.625rem',
    width: '6.625rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    cursor: 'pointer',
    backgroundColor: '#D9D9D9',
    '&:hover': {
        backgroundColor: '#F5F5F5',
    },
    '@tablet': {
        height: '9.375rem',
        width: '9.375rem',
    },
    variants: {
        isCorrect: {
            true: {
                backgroundColor: '#71FF3F',
                '&:hover': {
                    backgroundColor: '#71FF3F',
                    cursor: 'default',
                },
            },
            false: {
                backgroundColor: '#FF3F3F',
                '&:hover': {
                    backgroundColor: '#FF3F3F',
                    cursor: 'default',
                },
            },
        },
        isSelected: {
            true: {

            },
            false: {
                backgroundColor: '#D9D9D9',
                '&:hover': {
                    backgroundColor: '#F5F5F5',
                },
            },
        }
    },

})