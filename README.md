# Tic Tac Toe Game

A modern, interactive Tic Tac Toe game built with React and Vite, featuring a unique twist on the classic game with move limitations and beautiful UI.

## Live Demo

👉 [Play the game here!](https://endless-tictactoe.netlify.app/)

## 🎮 Game Features

- **Classic Tic Tac Toe** gameplay with a modern twist
- **Move Limitation**: Each player can only have 3 pieces on the board at a time
- **Automatic Piece Removal**: When a player makes their 4th move, their oldest piece is automatically removed
- **Real-time Winner Detection**: Instant game state updates and winner announcement
- **Responsive Design**: Beautiful, mobile-friendly interface
- **Dark Theme**: Elegant dark color scheme with gradient effects
- **Smooth Animations**: Hover effects and transitions for better user experience

## 🚀 How to Play

1. Players take turns placing X's and O's on the 3x3 grid
2. Each player can only have a maximum of 3 pieces on the board
3. When you place your 4th piece, your first piece will automatically disappear
4. The first player to get 3 of their marks in a row (horizontally, vertically, or diagonally) wins
5. Use the "New Game" button during play or "Restart" button after winning to start over

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for styling
- **JavaScript (ES6+)** - Modern JavaScript features

## 📁 Project Structure

```
src/
├── App.jsx                 # Main application component
├── main.jsx               # React application entry point
├── index.css              # Global styles
├── components/
│   └── Board.jsx          # Game board component
├── utils/
    └── gameLogic.jsx      # Game logic and winner detection

```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server

## 🎨 Design Features

- **Modern UI**: Clean, minimalist design with smooth transitions
- **Dark Theme**: Easy on the eyes with a sophisticated color palette
- **Responsive Layout**: Works perfectly on desktop and mobile devices
- **Visual Feedback**: Clear indication of current player and game state
- **Gradient Effects**: Beautiful button styling and hover effects

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

**Enjoy playing Tic Tac Toe!** 🎉
