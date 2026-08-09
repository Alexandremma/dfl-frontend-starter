import { Landing } from "@/types/landing.types";
import { CalendarClock, Recycle, MapPin } from "lucide-react";

export const landingData: Landing[] = [
  {
    id: "1",
    title: "Agenda por bairro",
    description: "Receba um lembrete no dia certo da coleta seletiva da sua rua.",
    icon: CalendarClock,
  },
  {
    id: "2",
    title: "Guia de descarte",
    description: "Descubra em qual lixeira vai cada material .",
    icon: Recycle,
  },
  {
    id: "3",
    title: "Pontos de coleta especial",
    description: "Encontre onde descartar pilha, óleo e eletrônico perto de você.",
    icon: MapPin,
  },
];