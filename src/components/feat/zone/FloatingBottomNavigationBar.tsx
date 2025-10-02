import { Button } from '@/components/ui/button'
import { Blocks, Camera, Grid2x2, Home, UserRound, UserRoundCheck, Brush } from 'lucide-react'

const FloatingBottomNavigationBar = () => {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 mx-4 rounded-full w-fit bg-white shadow-lg border border-gray-200">
      <div className="flex justify-between items-center p-4">
        <Button variant="ghost" size="icon" className="group relative">
          <Home
            strokeWidth={1}
            className="w-6 h-6 transition-all group-hover:scale-120 duration-300"
          />
        </Button>
        <Button variant="ghost" size="icon" className="group relative">
          <Brush
            strokeWidth={1}
            className="w-6 h-6 transition-all group-hover:rotate-90 group-hover:scale-110 duration-300"
          />
        </Button>
        <Button variant="ghost" size="icon" className="group relative">
          <Camera
            strokeWidth={1}
            className="w-6 h-6 transition-all group-hover:scale-120 duration-300"
          />
        </Button>
        <Button variant="ghost" size="icon" className="relative group">
          <Grid2x2
            strokeWidth={1}
            className="w-6 h-6 transition-all group-hover:hidden block duration-300 relative"
          />
          <Blocks
            strokeWidth={1}
            className="w-6 h-6 transition-all group-hover:block hidden duration-300 relative"
          />
        </Button>
        <Button variant="ghost" size="icon" className="group relative">
          <UserRound
            strokeWidth={1}
            className="w-6 h-6 transition-all group-hover:hidden block duration-300"
          />
          <UserRoundCheck
            strokeWidth={1}
            className="w-6 h-6 transition-all group-hover:block hidden duration-300"
          />
        </Button>
      </div>
    </div>
  )
}

export default FloatingBottomNavigationBar
