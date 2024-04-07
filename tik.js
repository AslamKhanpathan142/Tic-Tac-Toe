let boxes = document.querySelectorAll(".box");
let rest = document.querySelector("#reset");
let newbtn = document.querySelector("#new");
let winner = document.querySelector("#winner");
let hide = document.querySelector(".hide");

let turn0 = true;

const winpat = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]; 

boxes.forEach((box) => {
    newbtn.addEventListener("click", () => {
        box.innerText = null;
        hide.classList.add("hide");
        box.disabled = false;
    });
});

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        
        if(turn0 === true) {
        
            box.innerText ="0";
            turn0 = false;
            
        }
        else {
            box.innerText = "X";
            turn0 = true;
            
        }
        box.disabled = true;

        cheakwinner();
    });
});

const disablebox = () => {
    for(let box of boxes)
    {
        box.disabled = true;
    }
}

const showwinner = (winner) => {
    winner.innerText = "Congratulation Win This Game";
    //document.querySelector("#winner").innerText = pos1;
    hide.classList.remove("hide");
    disablebox();
};

const cheakwinner = () => {
    for(let pattern of winpat) {
       
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != "")
        {
            if(pos1 === pos2 && pos2 === pos3)
            {
                
                showwinner(pos1);
                //winner.innerText = "Congratulation Win This Game";
                //document.querySelector("#winner").innerText ="Congratulation Win This Game "+ pos1;

            }
        }
    }
};
boxes.forEach((box) => {
    rest.addEventListener("click", () => {
        console.log("hello");
        box.innerText = null;
        box.disabled = false;
    });
});





