import { useDarkMode } from '@/hooks/useDarkMode';
import { TbMoon, TbSun } from "react-icons/tb";


const ColorModeSwitcher = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <>
      { darkMode ? (
        <button
          className='flex items-center justify-center p-2 ml-2 rounded-xl bg-yellow-300 text-black transition-colors'
          onClick={() => setDarkMode(!darkMode)}
        >
          <TbSun size={20} />
        </button>
      ) : (
        <button
          className='flex items-center justify-center p-2 ml-2 rounded-xl bg-purple-600 text-white transition-colors'
          onClick={() => setDarkMode(!darkMode)}
        >
          <TbMoon size={20} />
        </button>
      )}
    </>
  )
}

export default ColorModeSwitcher