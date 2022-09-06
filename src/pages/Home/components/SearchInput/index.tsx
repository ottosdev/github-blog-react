import { SearchInputContainer } from "./styles";

import * as zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
const serachFormSchema = zod.object({
  query: zod.string(),
});

type PropsInput = zod.infer<typeof serachFormSchema>;
interface PropsInputProps {
  postsLength: number;
  loadPosts: (query?: string) => Promise<void>;
}
export function SearchInput({ loadPosts, postsLength }: PropsInputProps) {
  const { formState, handleSubmit, register } = useForm<PropsInput>({
    resolver: zodResolver(serachFormSchema),
  });

  async function handleSubmitPost(data: PropsInput) {
    await loadPosts(data.query);
    
  }
  return (
    <SearchInputContainer onSubmit={handleSubmit(handleSubmitPost)}>
      <header>
        <h3>Publicações</h3>
        <span>{postsLength} publicações</span>
      </header>
      <input type="text" placeholder="Buscar conteúdo" {...register("query")} />
    </SearchInputContainer>
  );
}
