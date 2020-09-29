import {genID} from "./genID"
import Password from "../assets/GameImg/Password.jpeg"
import Color from "../assets/GameImg/color.jpg"
import TrafficLight from "../assets/GameImg/TrafficLight.jpeg"
import MatchingBoxes from "../assets/GameImg/matching.jpg"
import MinFinder from "../assets/GameImg/MinFinder.jpeg"
import MemoryGrid from "../assets/GameImg/MemoryGrid.jpeg"
import AlphaReflex from "../assets/GameImg/AlphaReflex.jpeg"
import Sudoku from "../assets/GameImg/sudoku.jpg"
import TicTac from "../assets/GameImg/TicTac.jpeg"
import Memorise from "../assets/GameImg/memorise.jpeg"
import CashOut from "../assets/GameImg/CashOut.jpeg"

export const Games = [
   {
       id  : genID(),
       name: "Guess the password",
       category: "logical thinking",
       howToPlay: "The object of the game is to guess the hidden four digit number. There are no repeated digits in the number. This number combination will be guessed by you via multiple attempts. Once you have guessed, a code will be shown that indicates how successful your guess was. It will tell you how many digits have you guessed on the same position, and how many digits have you guessed on a different position. Yellow code means you have found one or more digits but in the wrong place. Green code means you have found one or more digits and in the right place.",
       about: "This game will help you to look at the tasks more attentively and solve them more effectively. It will teach you to analyze information and improve short-term memory. In addition, the game aims at developing cognitive speed, abstract thinking, and verbal-logical thinking. Practicing this game will help to work better in multitasking, organize workflow and make decisions.",
       img: Password
   },
   {
       id  : genID(),
       name: "Color crash",
       about: "Color crash game helps to develop visual thinking and attention and challenge our ability to focus and concentrate on critical information. This game will contribute you a lot as attention and focus are critical skills which help us to absorb, process and memorize information. Besides, the game will enhance abstract thinking and improve logical memory. ",
       category: "attention",
       howToPlay: "In this game you need to compare the given name of the color and the color of the circle. You should make a decision whether they match or not. If you give a wrong answer for five times, you will lose. It may sounds a bit confusing but definitely you will enjoy it. Give a try now!",
       img: Color
   },
    {
        id  : genID(),
        name: "Alpha Reflex",
        about: 'This original game is for developing fast thinking techniques, instant perception and reflexes. Playing this game trains people to make the right decisions faster. Due to the deliberate and conscious transfer of attention from one view to another, there is a speed-up in switching attention and an increase in the speed of reaction. A player must "see the bigger picture" to solve this task.',
        category: "speed",
        howToPlay: "The game is about choosing 15 letters in alphabetical order in 30 seconds and every time you choose one letter position of all letters changes for making task more challenging. Can you choose the letters in a right order? Sounds easy? You've got 30 seconds!",
        img: AlphaReflex
    },
   {
       id  : genID(),
       name: "MEMORY GRID",
       about: "It's a great game to train and boost your memory in a playful way. Playing memory games can improve other brain functions, such as attention, concentration, and focus. This game give space to critical thinking and that helps players nurture their attention to detail. Moreover, Every time you start a new game, a random positioning of the colored squares on the grid ensures a different game, so you can replay endlessly!",
       category: "memory",
       howToPlay: "In this memory game, colored squares are displayed on a grid for a limited time during which the player try to memorize the location of each square. When the chronometer stops, the squares automatically disappear from the grid and are displayed below the empty grid. The player must then find the right locations of each square on the grid by clicking them. If you give wrong answer 4 times,you will lose.",
       img: MemoryGrid
   },
    {
        id  : genID(),
        name: "TRAFFIC LIGHTS",
        about: "This game improves thinking dynamics, attention, short-term memorizing, and cognitive speed and forms the technique of mediated memorizing. The skill of semantic and logical processing of the material is trained, the efficiency of memory work is increased. This allows you to memorize a large amount of information: the names of new acquaintances, telephone numbers, various street addresses, etc. Also, the game activates the speed and accuracy of perception. These skills will be useful in everyday life.",
        category: "attention",
        howToPlay: "The rule for this game is simple. You should select “YES”, if the current traffic light is the same as the previous one. Otherwise, if they are different, you should choose “NO”. Here you go!",
        img: TrafficLight
    },
    {
        id  : genID(),
        name: "TIC TAC TOE",
        about: "Our version of this game is evolved a bit since the original version in ancient Egypt. This classic game contributes to developmental growth in various ways including understanding of probability, problem solving, spatial reasoning, hand-eye coordination, turn taking and strategizing. It prepares brain for more complex games because it helps you think of multiple things at once.",
        category: "logical thinking",
        howToPlay: "In order to win the game, a player must place three of their marks in a horizontal, vertical, or diagonal row. As the game is for two players, you need to think fast.",
        img: TicTac
    },
    {
        id  : genID(),
        name: "COINCIDENCE",
        about: "This game is a real dopamine goldmine. And dopamine boosts both pleasure and perseverance, while decreasing stress.  It teaches players to estimate, think quickly and strategize by planning next moves and considering how it will affect the board and which combination of movements will have the desired outcome.",
        category: "logical thinking",
        howToPlay: "At each stage, you slide tiles in any of the four directions of the screen (up, down, left and right). If two identical tiles fall onto one another, then they merge into one. Once tiles have slid and merged, a new tile pops up at a random free location of the grid. The best way to get the rules for game is to actually play the game.",
        img: MatchingBoxes
    },
    {
        id  : genID(),
        name: "MIN FINDER",
        about: "Min Finder game promotes active attention, concentration, switching of attention and visual perception. The game increases the ability to concentrate, develops speed reading skills, and improves memory. Practicing this game at least one time in a day will help you analyze a large amount of information and quickly navigate in problematic situations.",
        category: "speed",
        howToPlay: "The instruction for the game is pretty simple. You need to find the lowest number among the given options in a limited time.",
        img: MinFinder
    },
    {
        id  : genID(),
        name: "Sudoku",
        about: "Sudoku is a logic-based, combinatorial number-placement puzzle. Solving Sudoku puzzles is a great way to preserve mental abilities and logical thinking skills. Playing this game boosts logical thinking, develops quick-thinking skills, and reduces overthinking and anxiety. Moreover, it improves concentration, and slows Alzheimer’s.",
        category: "logical thinking",
        howToPlay: "The goal of Sudoku is simple. Each row, column and square (9 spaces each) needs to be filled out with the numbers 1-9, without repeating any numbers within the row, column or square.",
        img: Sudoku
    },
    {
        id  : genID(),
        name: "MEMORISER",
        about: "Memoriser develops a mechanical, figurative memory in the form of a game. In the process of training the brain learns to group and structure the information received. The simulator improves visual thinking, imagination and flexibility of mind. These skills will help to work more effectively with information, to acquire new knowledge and learn new things quickly.",
        category: "memory",
        howToPlay: "In the game board, there are always two identical images. Start the game by flipping a card. Then try to find another card that has the same image as the first. If you can't find a pair, the flipped cards will be flipped back with the face down. Try to remember these images as it becomes easier to find pairs the longer you play. When you find a pair they are removed from the board and when you find all the pairs in this memory, you have completed the level.",
        img: Memorise
    },
    {
        id  : genID(),
        name: "Cashout",
        about: "Mental arithmetic is useful not only during math lessons, but also in everyday life: this game activates logic in decision making and the ability to think analytically. It is not a usual situation to count in the mind in the era of computers but counting in this way develops the intellect and forms visual and abstract thinking. In addition, this game trains fast thinking techniques, verbal-logical thinking, and computation strategies.",
        category: "speed",
        howToPlay: "This game is perfect for practicing counting money or calculating change. Amount of money and the price is shown on the screen and you need to find the change. Count the coins and manats, then enter the right amount. If you exceed the total, you can clear the amount. You have one minute to complete each operation. When submit is clicked, it checks for accuracy, and give one point if it is right.",
        img: CashOut
    },
];
