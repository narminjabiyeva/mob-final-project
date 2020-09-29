import React, { useState, useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { prepareGrid } from "../../utils/prepareGrid"
import { chooseColor } from "../../utils/chooseColor"
import {CustomHeader, CustomText, EndModal} from "../../components"
import {BackButton} from "../../components/backButton";

export const MemoryGridGameScreen = ({navigation}) => {
  const [size,setSize] = useState(5);
  const [modal,setModal] = useState(false)
  const [grid, setGrid] = useState(prepareGrid(size));
  const [openedSecretCount, setOpenedSecretCount] = useState(0);
  const [isOpenedForRemember, setIsOpenedForRemember] = useState(true);
  const [points,setPoints] = useState(0);
  const [wrongs,setWrongs] = useState(0);
  
  const openedTimer = useRef(null);
  const gameTimer = useRef(null);



  const getCellSize = () => {
    const { width, height } = Dimensions.get("window");
    const isPortrait = height > width;
    const targetSize = isPortrait ? width : height;
    return (targetSize - 100) / size;
  };

  const [cellSize, setCellSize] = useState(getCellSize());

  const cellPressHandler = (y, x) => {
    if (!grid[y][x].opened) {
      setGrid((grid) => {
        const updatedGrid = [...grid];
        updatedGrid[y] = [...updatedGrid[y]];
        updatedGrid[y][x] = { ...updatedGrid[y][x], opened: true };

        return updatedGrid;
      });

      if (grid[y][x].secret) {
        setOpenedSecretCount((count) => count + 1);
       
        if(openedSecretCount+1 === size){
          setIsOpenedForRemember(true);
          setPoints((p) => p+1)
          setTimeout(() =>resetGame(),500);    
       }
      }
      else {
        setWrongs((w) => w+1)
        if(wrongs === 3) {
        setModal(true)
        }
        else {
        setIsOpenedForRemember(true);
        setTimeout(() => resetGame(),1000)
        }
      }
      
 
    }
  };

  const resetGame = () => {
    setGrid(prepareGrid(size));
    setOpenedSecretCount(0);
    setModal(false);
    
    setIsOpenedForRemember(true);
    closeForRemembering();
    gameTimerHandler();
  };

  const closeForRemembering = () => {
    if (openedTimer.current) {
      clearTimeout(openedTimer.current);
    }
    openedTimer.current = setTimeout(() => {
      setIsOpenedForRemember(false);
    }, 1000);
  };
  
  const gameTimerHandler = () => {
    if (gameTimer.current) {
        clearTimeout(gameTimer.current);
      }
      gameTimer.current = setTimeout(() => setModal(true), 20000);
  };
   
  useEffect(() => {
    closeForRemembering();
    gameTimerHandler();
  }, []);

  useEffect(() => {
    const updateCellSize = () => {
      setCellSize(getCellSize());
    };
    Dimensions.addEventListener("change", updateCellSize);

    return () => Dimensions.removeEventListener("change", updateCellSize);
  }, []);

  return (
    <View style={styles.container}>
      <BackButton navigation={navigation}/>
      <CustomText weight="bold" style={styles.points}>
         {points}
      </CustomText>
      {/* <Text>{isLimitPassed ? (isWin ? "Win" : "Lose") : "inProcess"}</Text> */}
      <View style={styles.grid}>
        {grid.map((row, y) => (
          <View style={styles.row} key={y}>
            {row.map(({ opened, secret }, x) => (
              <TouchableOpacity
                activeOpacity={0.5}
                key={x}
                onPress={() => cellPressHandler(y, x)}
              >
                <View
                  style={{
                    ...styles.cell,
                    width: cellSize,
                    height: cellSize,
                    backgroundColor: chooseColor(
                      opened || isOpenedForRemember,
                      secret
                    ),
                  }}
                ></View>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
     
      <EndModal
        visible={modal}
        close={resetGame}
        points={points}
        navigation={navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#edf9fa",

  },
 
  row: {
    flexDirection: "row",
  },
  cell: {
    borderColor: "grey",
    borderWidth: 1,
    margin: 3
  },
  buttons: {
    width: 300,
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "space-around",
  },
  points :{
    width: 50,
    textAlign: "center",
    paddingVertical: 10,
    backgroundColor: "gold",
    marginVertical: 10,
    color:"#fff",
    borderRadius: 5
  }
});

