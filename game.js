const allAreas = document.querySelectorAll('td')
const restart = document.querySelector('.restart_but')


const restartFuntion=()=>{
    allAreas.forEach(x=>{
        x.innerHTML = ""
        tictactoe.OConfiguration=[]
        tictactoe.XConfiguration=[]
        tictactoe.clicks=0
    })
    clickAllowed.map((x)=>{
        x.status=true
    })
}

restart.addEventListener('click', ()=>{
    restartFuntion()
})

const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
const tictactoe={
    changeStatus : false,
    XConfiguration : [],
    OConfiguration : [],
    clicks: 0
}
const winCheck=()=>{
    winConditions.map((x)=>{
        if (x.includes(tictactoe.OConfiguration[0]) && x.includes(tictactoe.OConfiguration[1]) && x.includes(tictactoe.OConfiguration[2])){
            window.alert("win")
        }else if (x.includes(tictactoe.OConfiguration[1]) && x.includes(tictactoe.OConfiguration[2]) && x.includes(tictactoe.OConfiguration[3])){
            window.alert("win")
        }else if (x.includes(tictactoe.OConfiguration[2]) && x.includes(tictactoe.OConfiguration[3]) && x.includes(tictactoe.OConfiguration[0])){
            window.alert("win")
        }else if (x.includes(tictactoe.OConfiguration[3]) && x.includes(tictactoe.OConfiguration[0]) && x.includes(tictactoe.OConfiguration[1])){
            window.alert("win")
        }
        
        if (x.includes(tictactoe.XConfiguration[0]) && x.includes(tictactoe.XConfiguration[1]) && x.includes(tictactoe.XConfiguration[2])){
            window.alert("win")
        }else if (x.includes(tictactoe.XConfiguration[1]) && x.includes(tictactoe.XConfiguration[2]) && x.includes(tictactoe.XConfiguration[3])){
            window.alert("win")
        }else if (x.includes(tictactoe.XConfiguration[2]) && x.includes(tictactoe.XConfiguration[3]) && x.includes(tictactoe.XConfiguration[0])){
            window.alert("win")
        }else if (x.includes(tictactoe.XConfiguration[3]) && x.includes(tictactoe.XConfiguration[0]) && x.includes(tictactoe.XConfiguration[1])){
            window.alert("win")
        }
    })
}
const drawFunction=()=>{
    if (tictactoe.clicks==9){
        window.alert("Draw")
        restartFuntion()
    }
}
const clickAllowed=[
    {status : true},
    {status : true},
    {status : true},
    {status : true},
    {status : true},
    {status : true},
    {status : true},
    {status : true},
    {status : true},
]

const setPointer=()=>{
        allAreas.forEach((x,index)=>{
                x.addEventListener('click',(evt)=>{
                    if (tictactoe.changeStatus == false){
                        if (clickAllowed[index].status==true){
                            tictactoe.clicks+=1
                            evt.target.innerHTML="X"
                            tictactoe.changeStatus=!tictactoe.changeStatus
                            tictactoe.XConfiguration.push(index)
                            clickAllowed[index].status=false
                            console.log("X " +tictactoe.XConfiguration)
                        }
                    }else if (tictactoe.changeStatus == true){
                        if (clickAllowed[index].status==true){
                            tictactoe.clicks+=1
                            evt.target.innerHTML="O"
                            tictactoe.changeStatus=!tictactoe.changeStatus
                            tictactoe.OConfiguration.push(index)
                            console.log("O " + tictactoe.OConfiguration)
                            clickAllowed[index].status=false
                        }
                    }
                    winCheck()
                    drawFunction()
                })
        })
    }


setPointer()

