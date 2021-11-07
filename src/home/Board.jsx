import React,{useState} from 'react';
import {Grid,Box} from "@mui/material";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import Button from '@mui/material/Button';

let clickList = [[0,0,0],[0,0,0],[0,0,0]];

let info = {
    0 : "Player 1 turn",
    1 : "Player 2 turn",
    2 : "Cell already Clicked",
    3 : "Result : Player 1 won",
    4 : "Result : Player 2 won"
}

export default function Landing(){
    const [isPlayer1Turn, setPlayer1Turn] = useState(true);
    const [result, setResult] = useState(false);
    const [player, setPlayer] = useState(1);
    const [infoText, setInfoText] = useState(0);
    const [player1Wins, setPlayer1Wins] = useState(0);
    const [player2Wins, setPlayer2Wins] = useState(0);

    const handleClick = (x,y,value) =>{
        if(!result){
            if(clickList[x][y] == 0 ){
                if(value==true){
                    clickList[x][y] = 1;
                    setPlayer(2);
                    setInfoText(1);
                    console.log(info[1]);
                }
                else{
                    clickList[x][y] = 2;
                    setPlayer(1);
                    setInfoText(0);
                    console.log(info[0]);
                }
                setPlayer1Turn(!value);
            }
            else{
                setInfoText(2);
                console.log(info[2]);
            }
            setResult(checkResult());
        }
    }

    function checkResult(){
        let resultDecided=false,playerWon=0;
        for(let i=0;i<3;i++){
            if((clickList[i][0]==clickList[i][1] && clickList[i][1]==clickList[i][2]) && clickList[i][0] != 0){
                resultDecided = true
                playerWon = clickList[i][0]
                console.log("won ");
                break;
            }
            if((clickList[0][i]==clickList[1][i] && clickList[1][i]==clickList[2][i]) && clickList[0][i] != 0){
                resultDecided = true
                playerWon = clickList[0][i]
                console.log("won ");
                break;
            }
        }
        if ( resultDecided == false){
            if((clickList[0][0]==clickList[1][1] && clickList[1][1]==clickList[2][2]) && clickList[0][0] != 0){
                resultDecided = true
                playerWon = clickList[0][0]
            }
            if((clickList[0][2]==clickList[1][1] && clickList[1][1]==clickList[2][0]) && clickList[0][2] != 0){
                resultDecided = true
                playerWon = clickList[0][2]
            }
        }
        // Diagonal checking yet to be verified
        if(resultDecided == true){
            if(playerWon==1){
                setInfoText(3);
                setPlayer1Wins(player1Wins+1);
            }
            else{
                setInfoText(4);
                setPlayer2Wins(player2Wins+1);
            }
        }
        return resultDecided;
    }

    function resetBoard(){
        clickList = [[0,0,0],[0,0,0],[0,0,0]];
        setPlayer1Turn(true);
        setResult(false);
        setPlayer(1);
        setInfoText(0);
    }

    function resetGame(){
        resetBoard();
        setPlayer1Wins(0);
        setPlayer2Wins(0);
    }

    return (
        <>
        <h4 className="GameInfoText">{info[infoText]}</h4>
        <br/>
        <Box paddingLeft={50} paddingRight={50} sx={{ justifyContent: 'center' }}>
        <Grid container spacing={2}>
            <Grid item xs={4} style={{backgroundColor:"#f3f3f6"}} onClick={() => handleClick(0,0,isPlayer1Turn)} border={3}>
            {clickList[0][0]==0 && <CheckBoxOutlineBlankIcon style={{fontSize: "100px"}}/>}
            {clickList[0][0]==1 && <CloseOutlinedIcon style={{fontSize: "100px"}}/>}
            {clickList[0][0]==2 && <CircleOutlinedIcon style={{fontSize: "100px"}} />}
            </Grid>
            <Grid item xs={4} style={{backgroundColor:"#f3f3f6"}} onClick={() => handleClick(0,1,isPlayer1Turn)} border={3}>
            {clickList[0][1]==0 && <CheckBoxOutlineBlankIcon style={{fontSize: "100px"}}/>}
            {clickList[0][1]==1 && <CloseOutlinedIcon style={{fontSize: "100px"}}/>}
            {clickList[0][1]==2 && <CircleOutlinedIcon style={{fontSize: "100px"}} />}
            </Grid>
            <Grid item xs={4} style={{backgroundColor:"#f3f3f6"}} onClick={() => handleClick(0,2,isPlayer1Turn)} border={3}>
            {clickList[0][2]==0 && <CheckBoxOutlineBlankIcon style={{fontSize: "100px"}}/>}
            {clickList[0][2]==1 && <CloseOutlinedIcon style={{fontSize: "100px"}}/>}
            {clickList[0][2]==2 && <CircleOutlinedIcon style={{fontSize: "100px"}} />}
            </Grid>
            <Grid item xs={4} style={{backgroundColor:"#f3f3f6"}} onClick={() => handleClick(1,0,isPlayer1Turn)} border={3}>
            {clickList[1][0]==0 && <CheckBoxOutlineBlankIcon style={{fontSize: "100px"}}/>}
            {clickList[1][0]==1 && <CloseOutlinedIcon style={{fontSize: "100px"}}/>}
            {clickList[1][0]==2 && <CircleOutlinedIcon style={{fontSize: "100px"}} />}
            </Grid>
            <Grid item xs={4} style={{backgroundColor:"#f3f3f6"}} onClick={() => handleClick(1,1,isPlayer1Turn)} border={3}>
            {clickList[1][1]==0 && <CheckBoxOutlineBlankIcon style={{fontSize: "100px"}}/>}
            {clickList[1][1]==1 && <CloseOutlinedIcon style={{fontSize: "100px"}}/>}
            {clickList[1][1]==2 && <CircleOutlinedIcon style={{fontSize: "100px"}} />}
            </Grid>
            <Grid item xs={4} style={{backgroundColor:"#f3f3f6"}} onClick={() => handleClick(1,2,isPlayer1Turn)} border={3}>
            {clickList[1][2]==0 && <CheckBoxOutlineBlankIcon style={{fontSize: "100px"}}/>}
            {clickList[1][2]==1 && <CloseOutlinedIcon style={{fontSize: "100px"}}/>}
            {clickList[1][2]==2 && <CircleOutlinedIcon style={{fontSize: "100px"}} />}
            </Grid>
            <Grid item xs={4} style={{backgroundColor:"#f3f3f6"}} onClick={() => handleClick(2,0,isPlayer1Turn)} border={3}>
            {clickList[2][0]==0 && <CheckBoxOutlineBlankIcon style={{fontSize: "100px"}}/>}
            {clickList[2][0]==1 && <CloseOutlinedIcon style={{fontSize: "100px"}}/>}
            {clickList[2][0]==2 && <CircleOutlinedIcon style={{fontSize: "100px"}} />}
            </Grid>
            <Grid item xs={4} style={{backgroundColor:"#f3f3f6"}} onClick={() => handleClick(2,1,isPlayer1Turn)} border={3}>
            {clickList[2][1]==0 && <CheckBoxOutlineBlankIcon style={{fontSize: "100px"}}/>}
            {clickList[2][1]==1 && <CloseOutlinedIcon style={{fontSize: "100px"}}/>}
            {clickList[2][1]==2 && <CircleOutlinedIcon style={{fontSize: "100px"}} />}
            </Grid>
            <Grid item xs={4} style={{backgroundColor:"#f3f3f6"}} onClick={() => handleClick(2,2,isPlayer1Turn)} border={3}>
            {clickList[2][2]==0 && <CheckBoxOutlineBlankIcon style={{fontSize: "100px"}}/>}
            {clickList[2][2]==1 && <CloseOutlinedIcon style={{fontSize: "100px"}}/>}
            {clickList[2][2]==2 && <CircleOutlinedIcon style={{fontSize: "100px"}} />}
            </Grid>
        </Grid>
        </Box>
        <br/>
        <Button variant="outlined" style={{marginRight:"10px",borderColor: '#ffffff',color: '#ffffff'}}><CloseOutlinedIcon style={{fontSize: "30px",color: '#ffffff'}}/>Player 1</Button>
        <Button variant="outlined" style={{marginRight:"10px",borderColor: '#ffffff',color: '#ffffff'}}><CircleOutlinedIcon style={{fontSize: "30px",color: '#ffffff'}}/>Player 2</Button>
        <Button variant="contained" style={{marginRight:"10px"}} onClick={()=> resetBoard()}>Play Again</Button>
        <Button variant="contained" color="error" onClick={()=> resetGame()}>Reset Game</Button>
        <br /><br />
        <div><Button variant="contained" color="success" style={{marginRight:"10px"}}>Player 1 Wins: {player1Wins}</Button>
        <Button variant="contained" color="success">Player 2 Wins: {player2Wins}</Button></div>
        <br/>
        </>
    );
}