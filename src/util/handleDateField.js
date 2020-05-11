import { parse, parseISO, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function handleConvertStringToDate(stringToDate) {
  return parse(stringToDate.replace(/[-/]/g, '/'), 'dd/MM/yyyy', new Date(), {
    locale: ptBR,
  });
}

export function handleConvertDateToString(dateToString) {
  return format(parseISO(dateToString), 'dd/MM/yyyy', { locale: ptBR });
}
