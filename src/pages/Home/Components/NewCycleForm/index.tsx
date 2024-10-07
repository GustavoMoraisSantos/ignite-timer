import { useFormContext } from "react-hook-form";
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import { useContext } from "react";
import { CyclesContext } from "../../../../contexts/CycleContext";

export default function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
        type="text"
        id="task"
        disabled={!!activeCycle}
        {...register("task")}
      />

      <datalist id="task-suggestions">
        <option value="Projeto" />
        <option value="Estudos" />
        <option value="Exercícios" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        placeholder="00"
        type="number"
        id="minutesAmount"
        step={5}
        min={5}
        disabled={!!activeCycle}
        max={60}
        {...register("minutesAmount", { valueAsNumber: true })}
      />
      <span>minutos</span>
    </FormContainer>
  );
}
