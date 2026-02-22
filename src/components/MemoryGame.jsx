import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaPython,
  FaDocker,
} from "react-icons/fa";
import {
  RiFlutterFill,
} from "react-icons/ri";
import {
  SiMongodb,
  SiSpringboot,
  SiApachekafka,
  SiRedis,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

const icons = [
  { id: "python", icon: <FaPython className="text-4xl text-yellow-400" /> },
  { id: "flutter", icon: <RiFlutterFill className="text-4xl text-cyan-400" /> },
  { id: "spring", icon: <SiSpringboot className="text-4xl text-green-500" /> },
  { id: "kafka", icon: <SiApachekafka className="text-4xl text-white" /> },
  { id: "redis", icon: <SiRedis className="text-4xl text-red-500" /> },
  { id: "mongo", icon: <SiMongodb className="text-4xl text-green-400" /> },
  { id: "postgres", icon: <BiLogoPostgresql className="text-4xl text-blue-400" /> },
  { id: "docker", icon: <FaDocker className="text-4xl text-blue-500" /> },
];

const shuffleArray = (arr) => {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  const initGame = () => {
    const doubled = [...icons, ...icons].map((item, index) => ({
      ...item,
      uniqueId: index,
    }));
    setCards(shuffleArray(doubled));
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setGameWon(false);
  };

  useEffect(() => {
    initGame();
  }, []);

  useEffect(() => {
    if (matched.length === icons.length * 2 && matched.length > 0) {
      setGameWon(true);
    }
  }, [matched]);

  useEffect(() => {
    if (flipped.length === 2) {
      const [first, second] = flipped;
      if (cards[first].id === cards[second].id) {
        setMatched((prev) => [...prev, first, second]);
      }
      const timeout = setTimeout(() => setFlipped([]), 800);
      return () => clearTimeout(timeout);
    }
  }, [flipped, cards]);

  const handleFlip = (index) => {
    if (
      flipped.length === 2 ||
      flipped.includes(index) ||
      matched.includes(index)
    )
      return;
    setFlipped((prev) => [...prev, index]);
    setMoves((prev) => prev + 1);
  };

  const isFlipped = (index) =>
    flipped.includes(index) || matched.includes(index);

  return (
    <div className="border-b border-neutral-900 pb-12">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Take a Break 🎮
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-lg"
      >
        <div className="mb-6 flex items-center justify-between px-2">
          <p className="text-sm text-neutral-400">
            Moves: <span className="text-cyan-400 font-semibold">{moves}</span>
          </p>
          <button
            onClick={initGame}
            className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:bg-cyan-500/20 hover:text-white"
          >
            Restart
          </button>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.uniqueId}
              onClick={() => handleFlip(index)}
              whileTap={{ scale: 0.95 }}
              className={`flex h-20 cursor-pointer items-center justify-center rounded-xl border transition-all duration-300 ${
                isFlipped(index)
                  ? "border-cyan-500/50 bg-neutral-800/80"
                  : "border-neutral-700 bg-neutral-900/60 hover:border-neutral-600 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]"
              } ${matched.includes(index) ? "border-green-500/50 bg-green-500/10" : ""}`}
            >
              {isFlipped(index) ? (
                <motion.div
                  initial={{ rotateY: 90 }}
                  animate={{ rotateY: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {card.icon}
                </motion.div>
              ) : (
                <span className="text-2xl text-neutral-600">?</span>
              )}
            </motion.div>
          ))}
        </div>

        {gameWon && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-8 rounded-xl border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-6 text-center"
          >
            <p className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              🎉 You matched all techs in {moves} moves!
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default MemoryGame;