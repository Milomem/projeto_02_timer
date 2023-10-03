import { HandPalm, Play } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useEffect, useState } from 'react'
import { differenceInSeconds } from 'date-fns'

const newCycleValidationSchema = zod.object({
  task: zod.string().min(1, 'informe a tarefa'),
  minutesAmount: zod.number().min(5).max(60),
})

// interface NewCycleFormData {
//  task: string
//  minutesAmount: number
// }

type NewCycleFormData = zod.infer<typeof newCycleValidationSchema>

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

export function Home() {
  const [cycle, setCycle] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const { register, handleSubmit, watch, reset } = useForm({
    resolver: zodResolver(newCycleValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const activeCycle = cycle.find((cycle) => cycle.id === activeCycleId)
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )

        if (secondsDifference >= totalSeconds) {
          setCycle((state) =>
            state.map((cycle) => {
              if (cycle.id === activeCycleId) {
                return { ...cycle, finishedDate: new Date() }
              } else {
                return cycle
              }
            }),
          )

          setAmountSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          setAmountSecondsPassed(secondsDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, totalSeconds, activeCycleId])

  function handleCreateNewCycle(data: NewCycleFormData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    setCycle((state) => [...state, newCycle])
    setActiveCycleId(newCycle.id)
    setAmountSecondsPassed(0)

    reset()
  }

  function handleInterruptCycle() {
    setCycle((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )

    setActiveCycleId(null)
  }

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmounts = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmounts).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    }
  }, [minutes, seconds, activeCycle])

  const task = watch('task')
  const isSubmitDisable = !task

  return (
    <div className=" flex-1 flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit(handleCreateNewCycle)}
        className=" flex flex-col items-center gap-14"
      >
        <div className=" w-full flex items-center justify-center gap-2 font-bold flex-wrap text-[1.125rem] text-cinza-100">
          <label htmlFor="task">Vou trabalhar em</label>
          <input
            id="task"
            disabled={!!activeCycle}
            list="task-suggestions"
            className=" placeholder:text-cinza-500 focus:shadow-none focus:border-verde-500 flex-1 text-cinza-100 bg-transparent h-10 border-b-2 border-solid border-cinza-500 text-[1.125rem] font-bold"
            placeholder="Dê um nome para seu o seu novo projeto"
            {...register('task')}
          />

          <datalist id="task-suggestions">
            <option value="Banana" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <input
            type="number"
            id="minutesAmount"
            disabled={!!activeCycle}
            className="placeholder:text-cinza-500 focus:shadow-none focus:border-verde-500 text-cinza-100 w-16 bg-transparent h-10 border-b-2 border-solid border-cinza-500 text-[1.125rem] font-bold"
            placeholder="+ ou -"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </div>

        <div className=" text-[10rem] leading-[8rem] text-cinza-100 flex gap-4 ">
          <span className="p-8 rounded-lg bg-cinza-700">{minutes[0]}</span>
          <span className="p-8 rounded-lg bg-cinza-700">{minutes[1]}</span>
          <span className="p-8 text-verde-500 w-16 flex overflow-hidden justify-center">
            :
          </span>
          <span className="p-8 rounded-lg bg-cinza-700">{seconds[0]}</span>
          <span className="p-8 rounded-lg bg-cinza-700">{seconds[1]}</span>
        </div>

        {activeCycle ? (
          <button
            type="button"
            className=" flex items-center mb-16 justify-center gap-2 font-bold cursor-pointer w-full p-4 rounded-lg bg-vermelho-500 text-cinza-100 hover:bg-vermelho-700"
          >
            <HandPalm size={36} />
            Interromper
          </button>
        ) : (
          <button
            type="submit"
            disabled={isSubmitDisable}
            onClick={handleInterruptCycle}
            className=" flex items-center mb-16 justify-center gap-2 font-bold cursor-pointer w-full p-4 rounded-lg bg-verde-500 text-cinza-100 hover:bg-verde-700 disabled:bg-verde-700 disabled:cursor-not-allowed"
          >
            <Play size={36} />
            Começar
          </button>
        )}
      </form>
    </div>
  )
}
