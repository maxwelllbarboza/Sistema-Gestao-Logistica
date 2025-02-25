import { TrendingUpSharp } from "@mui/icons-material";

export const ValidarEmail =(email:string)=>{
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        return emailPattern.test(email)
          

}
        

export const ValidateSenha = (value: string | undefined) => {
    const valueToCheck = value || '';
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(valueToCheck)) {
      return ' A senha deve conter de 8 á 16 caracteres, com letras maiúsculas e minúsculas, numeros e ao menos um caracter especial.';
    }
  };
  export const handleBlurEmail = (value: string, setEmailErrorMessage: (message: string) => void) => {
    setEmailErrorMessage(
        !ValidarEmail(value) && value
            ? "E-mail inválido, formato correto é 'exemplo@email.com'"
            : '',
    );
};
export const formatDateCampo = (value:string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{4})\d+?$/, '$1');
};

export const formatDate = (value: string) => {
  let formattedValue = value.replace(/\D/g, '');

  if (formattedValue.length >= 2) {
    formattedValue = formattedValue.substring(0, 2) + '/' + formattedValue.substring(2);
  }
  if (formattedValue.length >= 5) {
    formattedValue = formattedValue.substring(0, 5) + '/' + formattedValue.substring(5, 9);
  }

  // Validar se a data é válida
  const [day, month, year] = formattedValue.split('/').map(Number);
  const date = new Date(year, month - 1, day);

  // Verificar se a data é válida
  const isValidDate = (date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day);

  return {
    formattedValue,
    isValidDate: formattedValue.length === 10 && isValidDate
  };
};





export const formatTelefone = (value:string) => {

  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1');
};
export const formatRG = (value:string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{1})\d+?$/, '$1');
};
export const formatCNPJ = (value: string) => {
  return value
    .replace(/\D/g, '') 
    .replace(/(\d{2})(\d)/, '$1.$2') 
    .replace(/(\d{3})(\d)/, '$1.$2') 
    .replace(/(\d{3})(\d)/, '$1/$2') 
    .replace(/(\d{4})(\d)/, '$1-$2') 
    .replace(/(-\d{2})\d+?$/, '$1'); 
};
export const formatCPF = (value:string) => {

  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
};
export const formatNumber = (value:string,limite:number) => {
  const cleanedValue = value.replace(/\D/g, '');
  return cleanedValue.substring(0, limite);
};

export const formatCEP = (value: string) => {
  return value
    .replace(/\D/g, '')              
    .replace(/^(\d{5})(\d{3})/, '$1-$2')  
    .replace(/(-\d{3})\d+?$/, '$1');  
};
export const removeMask = (value: string): string => {
  return value.replace(/[^\d]/g, '');
}

export const formatCNH = (value: string) => {
  return value
    .replace(/\D/g, '')               
    .replace(/^(\d{11})\d+?$/, '$1'); 
};
export const formatCampoLimite = (value: string, limite:number) => {
  const lettersAndSpacesOnlyValue = value.replace(/[^a-zA-Z\s!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]/g, '');
  return lettersAndSpacesOnlyValue.substring(0, limite);
};
export const formatCampoLetraNumeros = (value: string, limite:number) => {
  const lettersAndSpacesOnlyValue =  value.replace(/[^a-zA-Z0-9\s!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]/g, '');
  return lettersAndSpacesOnlyValue.substring(0, limite);
};
export const formatPlaca = (value: string):string | null => {
  const cleanedValue = value.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
  const matchFormato1 = cleanedValue.match(/^([A-Z]{3})(\d{1,4})$/);
  if (matchFormato1) {
    const placaFormatada = `${matchFormato1[1]}-${matchFormato1[2]}`;
    return placaFormatada.substring(0, 8); // Limita a 8 caracteres
   
  }
  const matchFormato2 = cleanedValue.match(/^([A-Z]{3})(\d)([A-Z])(\d{2})$/);
  if (matchFormato2) {
    const placaFormatada = `${matchFormato2[1]}-${matchFormato2[2]}${matchFormato2[3]}${matchFormato2[4]}`;
  
    return placaFormatada.substring(0, 8); // Limita a 7 caracteres
  }
  
  return value.substring(0,8)

};

// export const formatarParaDatetimeLocal=(data: string): string  =>{
//   const partes = data.split(' às ');
//   const dataParte = partes[0];
//   const horaParte = partes[1];

//   const [dia, mes, ano] = dataParte.split('/');
//   const [hora, minuto] = horaParte.split(':');

//   const datetimeLocal = `${ano}-${mes.padStart(2, '0')}-${dia.padStart(2, '0')}T${hora}:${minuto}`;

//   return datetimeLocal;
// } 

export const formatarParaDatetimeLocal = (data: string): string => {
  if (!data) {
    // Se data for null, undefined ou uma string vazia, retornar uma string vazia
    return '';
  }

  const partes = data.split(' às ');
  if (partes.length < 2) {
    return '';
  }

  const dataParte = partes[0];
  const horaParte = partes[1];
console.log(data)
console.log(dataParte)
  const [dia, mes, ano] =  dataParte.split('/') ;
  const [hora, minuto] = horaParte.split(':');

  const datetimeLocal = `${ano}-${mes.padStart(2, '0')}-${dia.padStart(2, '0')}T${hora}:${minuto}`;

  return datetimeLocal;
}


export const formatNumberWithDots = (value:string) => {
  if (value === undefined || value === null) {
    return '';
  }


  let cleanValue = value.toString().replace(/\D/g, '');

  return cleanValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export const formatInputMoneyCentavos = (value: string) => {
  if (!value) {
    return '';
  }
  const cleanValue = value.replace(/\D/g, '');
  const number = parseInt(cleanValue, 10);

  if (isNaN(number)) {
    return '';
  }
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(number / 100);
};






