import { endpoint } from "@/constants/url.ts";
import type { Machine } from "@/features/machine/machineTypes.ts";

export const fetchMachine = async (id: number): Promise<Machine> => {
  const response = await fetch(`${endpoint}/machine/${id}`);
  const json = await response.json();

  return {
    id: json.id,
    name: json.move.name,
  };
};
