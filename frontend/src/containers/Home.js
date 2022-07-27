import "./Home.css";
import React, { useState } from "react";
export default function Home() {
    const options = [{ name: 'norton', isName: true }, { name: 'neville', isName: false }, { name: 'nathan', isName: false }, { name: 'ninja', isName: false }];
    const [option1Clicked, setoption1Clicked] = useState(false);
    const [option2Clicked, setoption2Clicked] = useState(false);
    const [option3Clicked, setoption3Clicked] = useState(false);
    const [option4Clicked, setoption4Clicked] = useState(false);
    return (
        <div className="Home">
            <div class="rectangle"></div>
            <div class="parent">
                {options.map((option, index) => {
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
                })}
            </div>
        </div>
    );
}