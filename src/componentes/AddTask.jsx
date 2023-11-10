import { RiAddBoxFill } from "react-icons/Ri";
import { useForm } from "react-hook-form";
import { Input, Text } from "@chakra-ui/react";

export default function AddTask({ addNewTask }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const { title, description } = data;
    addNewTask(title, description);
    reset();
  };

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      handleSubmit(onSubmit)();
    }
  };

  return (
    <form id="form" name="form" onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        placeholder="Add a title for your task"
        size="md"
        variant="filled"
        marginTop="10px"
        {...register("title", { required: true, minLength: 3 })}
        onKeyDown={handleEnterKey}
      ></Input>
      {errors.title?.type === "required" && (
        <Text color="red" fontStyle="italic" fontSize="14px">
          Titulo es obligatorio
        </Text>
      )}
      {errors.title?.type === "minLength" && (
        <Text color="red" fontStyle="italic" fontSize="14px">
          Titulo debe contener al menos 3 caracteres
        </Text>
      )}

      <Input
        type="text"
        marginTop="10px"
        marginBottom="10px"
        placeholder="Add a description for your task"
        {...register("description")}
        onKeyDown={handleEnterKey}
        variant="filled"
      ></Input>
      <RiAddBoxFill
        type="submit"
        className="botonAgregar"
        onClick={handleSubmit(onSubmit)}
      />
    </form>
  );
}
