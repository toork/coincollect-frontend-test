import { useCallback } from 'react'
import { unstakeFarm } from 'utils/calls'
import { useCoinCollectFarm } from 'hooks/useContract'

const useUnstakeFarms = (pid: number) => {
  const masterChefContract = useCoinCollectFarm() //useMasterchef()

  const handleUnstake = useCallback(
    async (amount: string) => {
      return unstakeFarm(masterChefContract, pid, amount)
    },
    [masterChefContract, pid],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstakeFarms
