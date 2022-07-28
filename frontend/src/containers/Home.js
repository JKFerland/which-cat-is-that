import "./Home.css";
import React, { useEffect, useState } from "react";

export default function Home() {
    const options = [{ name: 'norton', isName: true }, { name: 'neville', isName: false }, { name: 'nathan', isName: false }, { name: 'ninja', isName: false }];
    const [option1Clicked, setoption1Clicked] = useState(false);
    const [option2Clicked, setoption2Clicked] = useState(false);
    const [option3Clicked, setoption3Clicked] = useState(false);
    const [option4Clicked, setoption4Clicked] = useState(false);
    const [answeredCorrectly, setAnsweredCorrectly] = useState(false);
    let today = new Date().toLocaleDateString().split("/").join(":");
    today = encodeURIComponent(today).concat(".JPG");

    // ? How do we know in state when answered correctly ?
    // useEffect(() => { options.map((option, index) => { if (option.isName && index === 1 && option1Clicked) setAnsweredCorrectly(true); if (option.isName && index === 2 && option2Clicked) setAnsweredCorrectly(true); if (option.isName && index === 3 && option3Clicked) setAnsweredCorrectly(true); if (option.isName && index === 4 && option4Clicked) setAnsweredCorrectly(true); }); }, [option1Clicked, option2Clicked, option3Clicked, option4Clicked, options])
    // options.map((option, index) => { if (option.isName && index === 1 && option1Clicked) setAnsweredCorrectly(true); if (option.isName && index === 2 && option2Clicked) setAnsweredCorrectly(true); if (option.isName && index === 3 && option3Clicked) setAnsweredCorrectly(true); if (option.isName && index === 4 && option4Clicked) setAnsweredCorrectly(true); });
    console.log(today);

    return (
        <div className="Home">
            <img src={`https://whichcatisthat-whichcatisthat-catsbucket8932fb36-1vzp08fjbynx5.s3.us-west-1.amazonaws.com/${today}`} />
            <div class="parent">
                {answeredCorrectly ? <>ayo</> :
                    options.map((option, index) => {
                        if (index === 1) {
                            if (option1Clicked && option.isName)
                                return <div class="square div1 correct">{option.name}</div>
                            if (option1Clicked && !option.isName)
                                return <div class="square div1 incorrect">{option.name}</div>
                            return <div class="square div1" onClick={() => setoption1Clicked(true)}>{option.name}</div>
                        }
                        if (index === 2) {
                            if (option2Clicked && option.isName)
                                return <div class="square div2 correct">{option.name}</div>
                            if (option2Clicked && !option.isName)
                                return <div class="square div2 incorrect">{option.name}</div>
                            return <div class="square div2" onClick={() => setoption2Clicked(true)}>{option.name}</div>
                        }
                        if (index === 3) {
                            if (option3Clicked && option.isName)
                                return <div class="square div3 correct">{option.name}</div>
                            if (option3Clicked && !option.isName)
                                return <div class="square div3 incorrect">{option.name}</div>
                            return <div class="square div3" onClick={() => setoption3Clicked(true)}>{option.name}</div>
                        }
                        if (option4Clicked && option.isName)
                            return <div class="square div4 correct">{option.name}</div>
                        if (option4Clicked && !option.isName)
                            return <div class="square div4 incorrect">{option.name}</div>
                        return <div class="square div4" onClick={() => setoption4Clicked(true)}>{option.name}</div>
                    })
                }
            </div>
        </div >
    );
}