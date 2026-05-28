import React, { useState, useEffect } from 'react';
function App() {
  const [hover, setHover] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [balance, setBalance] = useState('0');
  const [trendingTokens, setTrendingTokens] = useState([]);
  const [economyToken, setEconomyToken] = useState('$HAKU85');
  const [contractAddress, setContractAddress] = useState('0xf21ec85ce0b05640436ffd7e8fabba5d82eb0774');
  useEffect(() => {
    const handleMouseEnter = () => setHover(true);
    const handleMouseLeave = () => setHover(false);
    document.addEventListener('mouseover', () => {
      if (document.querySelector('.orb')) {
        document.removeEventListener('mouseover', handleMouseEnter);
        document.removeEventListener('mouseout', handleMouseLeave);
        document.querySelector('.orb').addEventListener('mouseover', handleMouseEnter);
        document.querySelector('.orb').addEventListener('mouseout', handleMouseLeave);
      }
    });
    return () => {
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);
  const handleCreateWallet = () => {
    const wallet = "0x1234567890abcdef";
    setWalletAddress(wallet);
  };
  const handleGetBalance = () => {
    const balance = "100";
    setBalance(balance);
  };
  const handleCollectTrendingTokens = () => {
    const tokens = ['Token1', 'Token2', 'Token3'];
    setTrendingTokens(tokens);
  };
  const handleInteractWithAIAgents = () => {
    console.log('Interacting with other AI Agents via A2A services');
  };
  return (
    <div className="h-screen w-screen grid place-items-center bg-gray-900">
      <div className="relative w-80 h-80 ">
        <div className="orb bg-orange-500 w-40 h-40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-2xl z-10"></div>
        <div className="bg-gray-700 w-60 h-60 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-xl z-0"></div>
        <div className="bg-lime-400 w-20 h-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-lg ">
          <div className="bg-gray-500 w-10 h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full z-20"></div>
        </div>
        <div className="text-5xl font-bold text-gray-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">WEB3</div>
        <div className="text-2xl font-bold text-gray-100 absolute top-3/4 left-1/2 -translate-x-1/2 ">Wallet: {walletAddress}</div>
        <div className="text-2xl font-bold text-gray-100 absolute top-4/5 left-1/2 -translate-x-1/2 ">Balance: {balance}</div>
        <div className="text-2xl font-bold text-gray-100 absolute top-5/6 left-1/2 -translate-x-1/2 ">Economy Token: {economyToken}</div>
        <div className="text-2xl font-bold text-gray-100 absolute top-6/7 left-1/2 -translate-x-1/2 ">Contract Address: {contractAddress}</div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute top-5/6 left-3/5 -translate-x-1/2" onClick={handleCreateWallet}>Create Wallet</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute top-5/6 left-2/5 -translate-x-1/2" onClick={handleGetBalance}>Get Balance</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute top-5/6 left-1/5 -translate-x-1/2" onClick={handleCollectTrendingTokens}>Collect Trending Tokens</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute top-5/6 left-4/5 -translate-x-1/2" onClick={handleInteractWithAIAgents}>Interact with AI Agents</button>
        <div className="text-2xl font-bold text-gray-100 absolute top-7/8 left-1/2 -translate-x-1/2 ">Trending Tokens: {trendingTokens.join(', ')}</div>
      </div>
    </div>
  );
};
export default App;