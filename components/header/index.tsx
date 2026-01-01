const Header = () => {
  return (
    <header className="py-4 px-6 border-b border-gray-200 dark:border-gray-700 flex justify-between">
      <h1 className="text-xl font-bold text-gray-900 dark:text-gray-400 font-jost">Yuri Cruz - Full Stack Developer</h1>
      <ul className="flex gap-4 font-jost">
        <li>Home</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </header> 
  );    
};

export default Header;