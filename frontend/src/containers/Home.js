import "./Home.css";
import React, { useEffect, useState } from "react";
import { styled } from '../stitches.config';
import { API } from "aws-amplify";

function getGame() {
    return API.get("game", "/game");
}

export default function Home() {
    const options = [{ name: 'norton', isName: true, selected: false }, { name: 'neville', isName: false, selected: false }, { name: 'nathan', isName: false, selected: false }, { name: 'ninja', isName: false, selected: false }];
    const [test, setTest] = useState(options);
    const [game, setGame] = useState();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        function getGame() {
            return API.get("game", "/game");
        }

        async function onLoad() {
            try {
                const game = await getGame();

                setGame(game);
            } catch (e) {
                // onError(e);
            }
        }

        onLoad();
    }, []);
    const updateStateValue = (name) => {
        const newState = test?.map((obj) => {
            if (obj.name === name) {
                return { ...obj, selected: !obj.selected };
            }
            return obj;
        });
        setTest(newState);
    };
    let today = new Date().toLocaleDateString().split("/").join(":");
    today = encodeURIComponent(today).concat(".JPG");

    // ? How do we know in state when answered correctly ?
    // useEffect(() => { options.map((option, index) => { if (option.isName && index === 1 && option1Clicked) setAnsweredCorrectly(true); if (option.isName && index === 2 && option2Clicked) setAnsweredCorrectly(true); if (option.isName && index === 3 && option3Clicked) setAnsweredCorrectly(true); if (option.isName && index === 4 && option4Clicked) setAnsweredCorrectly(true); }); }, [option1Clicked, option2Clicked, option3Clicked, option4Clicked, options])
    // options.map((option, index) => { if (option.isName && index === 1 && option1Clicked) setAnsweredCorrectly(true); if (option.isName && index === 2 && option2Clicked) setAnsweredCorrectly(true); if (option.isName && index === 3 && option3Clicked) setAnsweredCorrectly(true); if (option.isName && index === 4 && option4Clicked) setAnsweredCorrectly(true); });
    // console.log(today);

    return (
        <div className="Home">
            <Cat src={`https://whichcatisthat-whichcatisthat-catsbucket8932fb36-1vzp08fjbynx5.s3.us-west-1.amazonaws.com/${today}`} />
            <SquareContainer>
                {
                    options.map((option, index) => {
                        if (test[index].selected)
                            return (<Square isCorrect={test[index].isName}>{option.name}</Square>);
                        return (<Square onClick={() => updateStateValue(option.name)}>{option.name}</Square>);
                    })
                }
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