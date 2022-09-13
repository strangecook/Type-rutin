import create , { StoreApi } from 'zustand'

type sidebarType ={
    sideState: boolean
    increasePopulation: () => void
}

const useSidebarStore = create<sidebarType>((set) => ({
  sideState: false,
  increasePopulation: () => set((state: {sideState: boolean}) => ({ sideState: !state.sideState })),
}))

export default useSidebarStore;