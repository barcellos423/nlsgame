
//++++++++++++++++		INDICE		+++++++++++++++++++

/*
ÍNDICE											DESCRIÇÃO	
cadeia_numerica    								verifica-se se string só contém números
ver_numeros		                                verifica-se se string só contém determinada quantidade de números
verifica_se_numero                              verifica se um uma string só possui números 
verifica_digito									verifica se um caracter é um dígito
verifica_data									verifica se a data é válida no formato dd/mm/aaaa
verifica_email									verifica se um email válido
verifica_cep									verifica se um cep válido no formato 11111-111
limpa_form										limpa o form
remove_cadeia									remove uma determinada cadeia de uma string
replace											substitui em uma string uma cadeia de caracteres por outra
ltrim											Remove os espaços à esquerda de uma string
rtrim											Remove os espaços à direita de uma string
trim											Remove os espaços à esquerda e à direita de uma string	
*/


//++++++++++++++++		FUNÇÕES		++++++++++++++++++++++++++++



//+++++++++++++++	CADEIA_NUMERICA		+++++++++++++
/*recebe uma string, verifica-se se essa string só contém números, retornando verdadeiro ou falso*/
function cadeia_numerica(str)
{	
    var tam = str.length;
	var nome = str;
   	var i = 0;
    	
	 for(; i < tam ; i++)
	 { 	caracter = nome.substring(i,i+1);   //charAt(i);
		if ( caracter < "0" || caracter > "9" )
		{   i = tam + 1000;
			return false;
		}
	 }
	 return true;
}	
//+++++++++++++++++++++++++++++++++++++++++++++++++++++	



//++++++++++++++	VER_NUMERO		+++++++++++++++++++
//verifica se um uma string só possui números e se possui um tamnho pre-determinado.
function ver_numero(obj,qtd) 
{	if (obj.value.length == qtd)
	{
		for (i=0 ; i<obj.value.length ; i++) 
		{	carac = obj.value.charAt(i);					
			if (carac<'0' || carac>'9') 
			{return false;}
		}
		return true;
	}
	else 
	{return false;}					
}	
//+++++++++++++++++++++++++++++++++++++++++++++++++++++

//++++++++++++++	VERIFICA_SE_NUMERO		+++++++++++++++++++
//verifica se um uma string só possui números. 
function verifica_se_numero(obj) 
{	for (i=0 ; i<obj.value.length ; i++) 
		{	carac = obj.value.charAt(i);
			if (carac<'0' || carac>'9') 
			{return false;}
		}
		return true;
}	
//+++++++++++++++++++++++++++++++++++++++++++++++++++++


//+++++++++++++++++++++++++++++++++++++++++++++++++++++	
/*recebe um caracter, e verifica se este caracter é um dígito, retornando verdadeiro ou falso*/
function verifica_digito (c)
{   if ( c==0 || c==1 || c==2 || c==3 || c==4 || c==5 || c==6 || c==7 || c==8 || c==9 ) 
	{	return true
	}
	else
	{	return false
	}	
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++	
		
		
		
//+++++++++++++		VERIFICA_DATA		+++++++++++++++			
/*recebe um obj e verifica se uma data é válida no formato dd/mm/aaaa, retornando verdadeiro ou falso*/
function verifica_data(obj)
{	if ( (obj.value.charAt(2)=="/") && (obj.value.charAt(5)=="/") && (obj.value.length ==10) )
		{	 VerForma = true;
		}
	else 
		{	VerForma = false;
		}
	if (     cadeia_numerica( obj.value.substring(0,2) )    ) 
		{	dia = obj.value.substring(0,2);
			VerNum1 = true;
		}					
	else 
		{	dia = 0;
			VerNum1 = false;
		}	
	if ( cadeia_numerica( obj.value.substring(3,5) )   ) 
		{   mes = obj.value.substring(3,5) ;
			VerNum2 = true;
		}
	else
		{	mes = 0; 
			VerNum2 = false;
		}
	if ( cadeia_numerica(obj.value.substring(6,10))    ) 
		{	ano = obj.value.substring(6,10);
			VerNum3 = true;
		}
	else
		{	ano = 0; 
			VerNum3 = false;			
		}
	if (   ((mes==1) || (mes==3) || (mes==5) || (mes==7) || (mes==8) || (mes==10) || (mes==12))  && ((dia >=1) && (dia<=31))   )
		{	 VerMes1 = true;
		}
	else 
		{	VerMes1 = false;
		}
	if (     ( (mes==4) || (mes==6) || (mes==9) || (mes==11) )  &&  ( (dia>=1) && (dia<=30) )      )
		{	VerMes2 = true;
		}
	else
		{	VerMes2 = false;
		}
	if (  (mes==2) && (dia>=1) && (dia<=28)  )
		{	VerMes3 = true;
		}
	else
		{	VerMes3 = false;
		}
	if (    (mes==2) && (dia==29) && ( (ano %4) == 0 )     ) 
		{	VerMes4 = true;
		}
	else
		{	VerMes4 = false;	
		}
	if ( (ano>=1850) && (ano<=2099) )
		{	VerAno = true; 
		}
	else
		{	VerAno = false;
		}	
	if (    (VerForma) && (VerAno) && (VerNum1) && (VerNum2) && (VerNum3)  &&  (  (VerMes1) || (VerMes2) || (VerMes3) || (VerMes4)  )     )
		{	return true; 
		}
	else 
		{	return false;		
		}
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++


//+++++++++++++		VERIFICA_DATA		+++++++++++++++			
/*recebe um obj e verifica se uma data é válida no formato dd/mm/aaaa, retornando verdadeiro ou falso*/
function verifica_data2(obj)
{
    var dia=0;
    var mes=0;
    var ano=0;
    if( (obj.value.length >=8) && (obj.value.length <=10))
	    {
		  		  
		   if((obj.value.charAt(1)=="/") && (obj.value.charAt(3)=="/") && (obj.value.length ==8))
	           {	   
		       VerForma = true;
			   if (     cadeia_numerica( obj.value.substring(0,1) )    ) 
				{	dia = obj.value.substring(0,1);
					VerNum1 = true;
				}					
			else 
				{	dia = 0;
					VerNum1 = false;
				}	
			if ( cadeia_numerica( obj.value.substring(2,3) )   ) 
				{   mes = obj.value.substring(2,3) ;
					VerNum2 = true;
				}
			else
				{	mes = 0; 
					VerNum2 = false;
				}
			if ( cadeia_numerica(obj.value.substring(4,8))    ) 
				{	ano = obj.value.substring(4,8);
					VerNum3 = true;
				}
			else
				{	ano = 0; 
					VerNum3 = false;			
				}
					   
			   
			   }
		   else if((obj.value.charAt(2)=="/") && (obj.value.charAt(4)=="/") && (obj.value.length ==9))
		   {
		       if (     cadeia_numerica( obj.value.substring(0,2) )    ) 
					{	dia = obj.value.substring(0,2);
						VerNum1 = true;
					}					
				else 
					{	dia = 0;
						VerNum1 = false;
					}	
				if ( cadeia_numerica( obj.value.substring(3,4) )   ) 
					{   mes = obj.value.substring(3,4) ;
						VerNum2 = true;
					}
				else
					{	mes = 0; 
						VerNum2 = false;
					}
				if ( cadeia_numerica(obj.value.substring(5,9))    ) 
					{	ano = obj.value.substring(5,9);
						VerNum3 = true;
					}
				else
					{	ano = 0; 
						VerNum3 = false;			
					}
			    VerForma = true;
		   }
		   else if((obj.value.charAt(1)=="/") && (obj.value.charAt(4)=="/") && (obj.value.length ==9))
		   {
		   if (     cadeia_numerica( obj.value.substring(0,1) )    ) 
					{	dia = obj.value.substring(0,1);
						VerNum1 = true;
					}					
				else 
					{	dia = 0;
						VerNum1 = false;
					}	
				if ( cadeia_numerica( obj.value.substring(2,4) )   ) 
					{   mes = obj.value.substring(2,4) ;
						VerNum2 = true;
					}
				else
					{	mes = 0; 
						VerNum2 = false;
					}
				if ( cadeia_numerica(obj.value.substring(5,9))    ) 
					{	ano = obj.value.substring(5,9);
						VerNum3 = true;
					}
				else
					{	ano = 0; 
						VerNum3 = false;			
					}
					   
		       VerForma = true;
		   }	   
		   else if ( (obj.value.charAt(2)=="/") && (obj.value.charAt(5)=="/") && (obj.value.length ==10) )
		   {
		      if (     cadeia_numerica( obj.value.substring(0,2) )    ) 
					{	dia = obj.value.substring(0,2);
						VerNum1 = true;
					}					
				else 
					{	dia = 0;
						VerNum1 = false;
					}	
				if ( cadeia_numerica( obj.value.substring(3,5) )   ) 
					{   mes = obj.value.substring(3,5) ;
						VerNum2 = true;
					}
				else
					{	mes = 0; 
						VerNum2 = false;
					}
				if ( cadeia_numerica(obj.value.substring(6,10))    ) 
					{	ano = obj.value.substring(6,10);
						VerNum3 = true;
					}
				else
					{	ano = 0; 
						VerNum3 = false;			
					}
					   
		       VerForma = true;
               
		   }
		   else
		       VerForma = false;	    	   	   
		   	   	   
		   
	    }
	else
	    VerForma = false;
	
	if (   ((mes==1) || (mes==3) || (mes==5) || (mes==7) || (mes==8) || (mes==10) || (mes==12))  && ((dia >=1) && (dia<=31))   )
		{	 VerMes1 = true;
		}
	else 
		{	VerMes1 = false;
		}
	if (     ( (mes==4) || (mes==6) || (mes==9) || (mes==11) )  &&  ( (dia>=1) && (dia<=30) )      )
		{	VerMes2 = true;
		}
	else
		{	VerMes2 = false;
		}
	if (  (mes==2) && (dia>=1) && (dia<=28)  )
		{	VerMes3 = true;
		}
	else
		{	VerMes3 = false;
		}
	if (    (mes==2) && (dia==29) && ( (ano %4) == 0 )     ) 
		{	VerMes4 = true;
		}
	else
		{	VerMes4 = false;	
		}
	if ( (ano>=1850) && (ano<=2099) )
		{	VerAno = true; 
		}
	else
		{	VerAno = false;
		}	
	if (    (VerForma) && (VerAno) && (VerNum1) && (VerNum2) && (VerNum3)  &&  (  (VerMes1) || (VerMes2) || (VerMes3) || (VerMes4)  )     )
		{	return true; 
		}
	else 
		{	return false;		
		}
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++



//+++++++++++++		VERIFICA_EMAIL	++++++++++++++++++++
/*recebe um objeto e verifica se é um email válido, retornando verdadeiro ou falso*/
function verifica_email(obj)
{	a = obj.value.length	
	b = obj.value.indexOf("@")	
	c = obj.value.substring( b+1, a)
    if ( (obj.value.length < 6) ||
   		 (obj.value.indexOf("@") == -1) || 
  		 (obj.value.indexOf(".") == -1) ||
   		 (obj.value.indexOf("@") == 0)  ||
   		 (obj.value.indexOf("@.") != -1) ||
   		 (obj.value.indexOf(".@") != -1) ||
		 (obj.value.indexOf("..") != -1) ||
		 (obj.value.indexOf(" ")!= -1) ||
		 (c.indexOf("@")!= -1)	)		 
		 {	return false;
		 }
	else
	{return true}	 
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++



//++++++++++++++	VERIFCA_CEP		++++++++++++++++++++
/*recebe um objeto e verifica se é um cep válido, retornado verdadeiro ou falso*/
function verifica_cep(obj)
{	if ( (obj.value.indexOf("-") != 5) || (obj.value.length != 9)  || (  !(cadeia_numerica(replace(obj.value,"-","")))) )   
		{ return false}
	else
		{return true}
}	
//+++++++++++++++++++++++++++++++++++++++++++++++++++++



//+++++++++++++++		LIMPAR_FORM		++++++++++++++++
/*Recebe: numero da ordem do formulário no documento e limpa o form*/
function limpar_form(num_form) 
{
	maxi=document.forms[num_form].elements.length-1;
	for (i=0;i<=maxi;i++) 
	{	tipo=document.forms[num_form].elements[i].type;
		if (tipo=='select-one')
		 {	document.forms[num_form].elements[i].options[0].selected=true;
		 }
		if (tipo=='text' || tipo=='password')
		 {	document.forms[num_form].elements[i].value='';
		 }
		if (tipo=='checkbox' || tipo=='radio') 
		{	document.forms[num_form].elements[i].checked=false;
		}
	}
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++



//++++++++++++++++		LTRIM	+++++++++++++++++++++++
/* recebe uma string e retira todos os espaços à esquerda da palavra*/
function ltrim(str)
{ tam = str.length				
  ch = str.charAt(0)
  i = 0
  while	(ch == " ")
	{ 	i++	
		ch = str.charAt(i)
	}
  return str.substring(i,tam)
}		
//+++++++++++++++++++++++++++++++++++++++++++++++++++++



//++++++++++++++++		RTRIM	+++++++++++++++++++++++
/* recebe uma string e retira todos os espaços à direita da palavra*/
function rtrim(str)
{ tam = str.length				
  ch = str.charAt(tam - 1)
  i = tam  
  while	(ch == " ")
	{ 	i --	
		ch = str.charAt(i)
	}
  return str.substring(0,i+1)
}		
//+++++++++++++++++++++++++++++++++++++++++++++++++++++



//++++++++++++++++		TRIM	+++++++++++++++++++++++
/* recebe uma string e retira todos os espaços à direita e à esquerda dela */
function trim(str)
{ return ltrim(rtrim(str)) 
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++



//+++++++++++++++		REPLACE		+++++++++++++++++++
//substitui um caracter por outro 
function replace(s,velho,novo)
{   nova_str = ""
	cont=0;
	tam= (s.length);
	indice = tam - 1
	tam_velho = (velho.length)
	indice_velho = tam_velho - 1
	if (tam < tam_velho )
	{ nova_str = s}
	else
	{
		while (cont <= indice-indice_velho)
		{	aux = ""
			aux = s.substring(cont,cont+tam_velho);
			if (aux == velho) 
			{ nova_str += novo
			  cont += (tam_velho)
			  if (cont > indice-indice_velho)
			  { nova_str += s.substring(cont,tam)}	 
			}
			else
			{ if (cont+tam_velho == tam) 
				{nova_str += s.substring(tam-tam_velho,tam)}
			  else
			   	{nova_str += aux.charAt(0)
				}
			  cont++		
			}
         }	
	}
	return nova_str;	
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++

//+++++++++++++		REMOVE CADEIA	+++++++++++++++++++
/*recebe uma string e umaa cadeia à ser removida.
  remove uma determinada cadeia de uma string.*/  
function remove_cadeia (s, c)
{return replace(s,c,"")
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++

// verifica se string esta vazia
function esta_vazio(obj)
{
    str = trim(obj.value);
	if (str.length==0)
		return true;
	else
		return false;	
}

//by Alex
//verifica se o campo possui menos de três caracteres
function verifica_tamanho_campo(obj,tamanho)
{
	str = trim(obj.value);
	if (str.length >= tamanho)
		return true;
	else
		return false;	
}

function comparaData(data1,data2)
{


   var diaData1
   var mesData1
   var anoData1
   var diaData2
   var mesData2
   var anoData2
   var dataTemp1 = data1.value
   var dataTemp2 = data2.value
   if( (!verifica_data2(data1)) || (!verifica_data2(data2)) )
     return 'dataInvalida'
   if(dataTemp1.length == 8)
   {
     dataTemp1 = '0'+dataTemp1.substring(0,1)+'/0'+dataTemp1.substring(2,8)
   }
   if(dataTemp1.length == 9)
   {
     if(dataTemp1.charAt(1)=='/')
	        dataTemp1 = '0'+dataTemp1
   	 else
	        dataTemp1 = dataTemp1.substring(0,2)+'/0'+dataTemp1.substring(3,9)
   }
   
   if(dataTemp2.length == 8)
   {
     dataTemp2 = '0'+dataTemp2.substring(0,1)+'/0'+dataTemp2.substring(2,8)
   }
   if(dataTemp2.length == 9)
   {
     if(dataTemp2.charAt(1)=='/')
	        dataTemp2 = '0'+dataTemp2
   	 else
	        dataTemp2 = dataTemp2.substring(0,2)+'/0'+dataTemp2.substring(3,9)
   }
  
   diaData1 = eval(dataTemp1.substring(0,2))
   mesData1 = eval(dataTemp1.substring(3,5))
   anoData1 = eval(dataTemp1.substring(6,10))
   
   diaData2 = eval(dataTemp2.substring(0,2))
   mesData2 = eval(dataTemp2.substring(3,5))
   anoData2 = eval(dataTemp2.substring(6,10))
         
   if(dataTemp1==dataTemp2)
       return 'igual'
   else if(anoData1<anoData2)
       return 'menor'
   else if(anoData1>anoData2)
       return 'maior'
   else
   {
       if(mesData1<mesData2)
	       return 'menor'
	   else if(mesData1>mesData2)
	       return 'maior'
	   else
	   {
	       if(diaData1<diaData2)
		       return 'menor'
		   else
		       return 'maior'	   
	   }	   	   
   }	   	    	   
}

function comparaDataString(data1,data2)
{
   var diaData1
   var mesData1
   var anoData1
   var diaData2
   var mesData2
   var anoData2
   var dataTemp1 = data1
   var dataTemp2 = data2
   
   if(dataTemp1.length == 8)
   {
     dataTemp1 = '0'+dataTemp1.substring(0,1)+'/0'+dataTemp1.substring(2,8)
   }
   if(dataTemp1.length == 9)
   {
     if(dataTemp1.charAt(1)=='/')
	        dataTemp1 = '0'+dataTemp1
   	 else
	        dataTemp1 = dataTemp1.substring(0,2)+'/0'+dataTemp1.substring(3,9)
   }
   
   if(dataTemp2.length == 8)
   {
     dataTemp2 = '0'+dataTemp2.substring(0,1)+'/0'+dataTemp2.substring(2,8)
   }
   if(dataTemp2.length == 9)
   {
     if(dataTemp2.charAt(1)=='/')
	        dataTemp2 = '0'+dataTemp2
   	 else
	        dataTemp2 = dataTemp2.substring(0,2)+'/0'+dataTemp2.substring(3,9)
   }
  
   diaData1 = eval(dataTemp1.substring(0,2))
   mesData1 = eval(dataTemp1.substring(3,5))
   anoData1 = eval(dataTemp1.substring(6,10))
   
   diaData2 = eval(dataTemp2.substring(0,2))
   mesData2 = eval(dataTemp2.substring(3,5))
   anoData2 = eval(dataTemp2.substring(6,10))
         
   if(dataTemp1==dataTemp2)
       return 'igual'
   else if(anoData1<anoData2)
       return 'menor'
   else if(anoData1>anoData2)
       return 'maior'
   else
   {
       if(mesData1<mesData2)
	       return 'menor'
	   else if(mesData1>mesData2)
	       return 'maior'
	   else
	   {
	       if(diaData1<diaData2)
		       return 'menor'
		   else
		       return 'maior'	   
	   }	   	   
   }	   	    	   
}


function compara(string1,string2)
{
    var contador
    if(string1==string2)
	{
	    return true
	}
	if(string1.length != string2.length)
	{
	    return false
	}
	else
	{
	    for(contador = 0;contador < string1.length;contador++)
		{
		    if( maiuscula(string1.charAt(contador)) != maiuscula(string2.charAt(contador)) )
			  return false
		}
	}
	return true;		
}

function maiuscula(letra)
    {
    switch(letra)
        {
        case 'a': return 'A'
        case 'b': return 'B'
        case 'c': return 'C'
        case 'd': return 'D'
        case 'e': return 'E'
        case 'f': return 'F'
        case 'g': return 'G'
        case 'h': return 'H'
        case 'i': return 'I'
        case 'j': return 'J'
        case 'k': return 'K'
        case 'l': return 'L'
        case 'm': return 'M'
        case 'n': return 'N'
        case 'o': return 'O'
        case 'p': return 'P'
        case 'q': return 'Q'
        case 'r': return 'R'
        case 's': return 'S'
        case 't': return 'T'
        case 'u': return 'U'
        case 'v': return 'V'
        case 'w': return 'W'
        case 'x': return 'X'
        case 'y': return 'Y'
        case 'z': return 'Z'
        case 'ç': return 'Ç'

        case 'á': return 'Á'
        case 'é': return 'É'
        case 'í': return 'Í'
        case 'ó': return 'Ó'
        case 'ú': return 'Ú'

        case 'ý': return 'Ý'

        case 'à': return 'À'
        case 'è': return 'È'
        case 'ì': return 'Ì'
        case 'ò': return 'Ò'
        case 'ù': return 'Ù'

        case 'â': return 'Â'
        case 'ê': return 'Ê'
        case 'î': return 'Î'
        case 'ô': return 'Ô'
        case 'û': return 'Û'

        case 'ã': return 'Ã'
        case 'õ': return 'Õ'
        case 'ñ': return 'Ñ'        

        case 'ä': return 'Ä'
        case 'ë': return 'Ë'
        case 'ï': return 'Ï'
        case 'ö': return 'Ö'
        case 'ü': return 'Ü'
        
        case 'ÿ': return 'Ÿ'          

        default: return letra  
        }  
    }

function inteiroParaCaractere(valor)
    {
    switch(valor)
        {
        case 45 : return '-'
        case 61 : return '='
        case 180 : return '´'
        case 91 : return '['
        case 231 : return 'ç'
        case 126 : return '~'
        case 93 : return ']'
        case 44 : return ','
        case 46 : return '.'
        case 59 : return ';'
        case 47 : return '/'
        case 95 : return '_'
        case 43 : return '+'
        case 34 : return '\"'
        case 39 : return '\''
        case 33 : return '!'
        case 64 : return '@'
        case 35 : return '#'
        case 36 : return '$'
        case 37 : return '%'
        case 168 : return '¨'
        case 38 : return '&'
        case 42 : return '*'
        case 40 : return '('
        case 41 : return ')'
        case 96 : return '`'
        case 123 : return '{'
        case 199 : return 'Ç'
        case 94 : return '^'
        case 125 : return '}'
        case 60 : return '<'
        case 62 : return '>'
        case 58 : return ':'
        case 63 : return '?'
        case 124 : return '|'
        case 176 : return '°'
        case 186 : return 'º'
        case 170 : return 'ª'
        case 167 : return '§'
        case 185 : return '¹'
        case 178 : return '²'
        case 179 : return '³'
        case 163 : return '£'
        case 162 : return '¢'
        case 172 : return '¬'
        case 32 : return ' '
        case 65 : return 'A'
        case 66 : return 'B'
        case 67 : return 'C'
        case 68 : return 'D'
        case 69 : return 'E'
        case 70 : return 'F'
        case 71 : return 'G'
        case 72 : return 'H'
        case 73 : return 'I'
        case 74 : return 'J'
        case 75 : return 'K'
        case 76 : return 'L'
        case 77 : return 'M'
        case 78 : return 'N'
        case 79 : return 'O'
        case 80 : return 'P'
        case 81 : return 'Q'
        case 82 : return 'R'
        case 83 : return 'S'
        case 84 : return 'T'
        case 85 : return 'U'
        case 86 : return 'V'
        case 87 : return 'W'
        case 88 : return 'X'
        case 89 : return 'Y'
        case 90 : return 'Z'
        case 48 : return '0'
        case 49 : return '1'
        case 50 : return '2'
        case 51 : return '3'
        case 52 : return '4'
        case 53 : return '5'
        case 54 : return '6'
        case 55 : return '7'
        case 56 : return '8'
        case 57 : return '9'
        case 92 : return '\\'
        case 97 : return 'a'
        case 98 : return 'b'
        case 99 : return 'c'
        case 100 : return 'd'
        case 101 : return 'e'
        case 102 : return 'f'
        case 103 : return 'g'
        case 104 : return 'h'
        case 105 : return 'i'
        case 106 : return 'j'
        case 107 : return 'k'
        case 108 : return 'l'
        case 109 : return 'm'
        case 110 : return 'n'
        case 111 : return 'o'
        case 112 : return 'p'
        case 113 : return 'q'
        case 114 : return 'r'
        case 115 : return 's'
        case 116 : return 't'
        case 117 : return 'u'
        case 118 : return 'v'
        case 119 : return 'w'
        case 120 : return 'x'
        case 121 : return 'y'
        case 122 : return 'z'
        case 225 : return 'á'
        case 233 : return 'é'
        case 237 : return 'í'
        case 243 : return 'ó'
        case 250 : return 'ú'
        case 253 : return 'ý'
        case 193 : return 'Á'
        case 201 : return 'É'
        case 205 : return 'Í'
        case 211 : return 'Ó'
        case 218 : return 'Ú'
        case 221 : return 'Ý'
        case 224 : return 'à'
        case 232 : return 'è'
        case 236 : return 'ì'
        case 242 : return 'ò'
        case 249 : return 'ù'
        case 192 : return 'À'
        case 200 : return 'È'
        case 204 : return 'Ì'
        case 210 : return 'Ò'
        case 217 : return 'Ù'
        case 226 : return 'â'
        case 234 : return 'ê'
        case 238 : return 'î'
        case 244 : return 'ô'
        case 251 : return 'û'
        case 194 : return 'Â'
        case 202 : return 'Ê'
        case 206 : return 'Î'
        case 212 : return 'Ô'
        case 219 : return 'Û'
        case 227 : return 'ã'
        case 245 : return 'õ'
        case 241 : return 'ñ'
        case 195 : return 'Ã'
        case 213 : return 'Õ'
        case 209 : return 'Ñ'
        case 228 : return 'ä'
        case 235 : return 'ë'
        case 239 : return 'ï'
        case 246 : return 'ö'
        case 252 : return 'ü'
        case 255 : return 'ÿ'
        case 196 : return 'Ä'
        case 203 : return 'Ë'
        case 207 : return 'Ï'
        case 214 : return 'Ö'
        case 220 : return 'Ü'
        case 376 : return 'Ÿ'
        default: return null 
        }
    }

	
function chamaPopupInvisivel(nomeDaPaginaPopup,codigoDoProduto)
{ 
  var url;
  var janela = null;
  if(!esta_vazio(codigoDoProduto))
  {
	  if(cadeia_numerica(codigoDoProduto.value))
	  {
	    url  = nomeDaPaginaPopup + "?tipo=Anterior&CodProd="+codigoDoProduto.value;
	    janela = window.open(url,"Produtos","toolbar=no,location=no,status=no,scrollbars=no,directories=no,width=1,height=1,top=2000,left=2000");
	  }
  }
}

function transformaData(data)
{
    var dataAlterada = data; 
	if( dataAlterada.charAt(1)=='/' )
	{
	    if (dataAlterada.charAt(3)=='/')
		{
	        dataAlterada = '0'+dataAlterada.substring(0,2) + '0' + dataAlterada.substring(2,8) 
	    }
		else
		{
		    dataAlterada = '0'+dataAlterada.substring(0,9)  
		}
	}
	else if ( dataAlterada.charAt(4)=='/' )
    {
	    dataAlterada = dataAlterada.substring(0,3) + '0' + dataAlterada.substring(3,10) 
	}
	return dataAlterada;    
}

/*
function diasEntreDatas(anterior, posterior)
{
    if(anterior==posterior)
	    return 0;
		
    var dataAnterior = transformaData(anterior)
	var dataPosterior = transformaData(posterior)
    var diaAnterior;
	var mesAnterior;	
	
}	
*/


/*
verifica se a string cgc esta no formato
XX.XXX.XXX/0001-XX
onde X eh um digito
*/
function verificaCgc(cgc)
{
    if(cgc.length != 18)
        return false;
     
    if ((cgc.charAt(2) != '.')||(cgc.charAt(6) != '.')||(cgc.substring(10,16) != '/0001-'))
        return false;
		
    if ((!cadeia_numerica(cgc.substring(0,2)))||(!cadeia_numerica(cgc.substring(3,6)))||(!cadeia_numerica(cgc.substring(7,10)))||(!cadeia_numerica(cgc.substring(16,18)))) 
        return false; 

    return true;
}

function verificaCpf(cpf)
{
    if(cpf.length != 14)
        return false;
   
    if ((cpf.charAt(3) != '.')||(cpf.charAt(7) != '.')||(cpf.charAt(11) != '-'))
        return false;
		
    if ((!cadeia_numerica(cpf.substring(0,3)))||(!cadeia_numerica(cpf.substring(4,7)))||(!cadeia_numerica(cpf.substring(8,11)))||(!cadeia_numerica(cpf.substring(12,14)))) 
        return false; 

    return true;
}


/*
Esta funcao verifica se numero e uma cadeia numerica
com ponto separando a parte fracionaria
ex:
1000067.35
2.6785
*/
function cadeia_numerica_fracionaria(numero)
{
    var posicaoDoPonto;
    posicaoDoPonto = numero.indexOf(".")
    /*numero nao tem ponto*/
    if(posicaoDoPonto == -1)
    {
        return false; 
    }
    else
    {
         /* numero tem mais de um ponto */
         if(numero.indexOf(".",(posicaoDoPonto + 1)) != -1)
         {
             return false;
         }
         else
         {
             if((cadeia_numerica(numero.substring(0,posicaoDoPonto)))&&(cadeia_numerica(numero.substring((posicaoDoPonto + 1),numero.length))))
             {
                 return true;
             } 
         }
    }
    return false;

}

/*
esta funcao aceita 2 tipos de numero
um inteiro
ex:  10902029
ou um com parte fracionaria
ex:   1000203994,4998598
se o numero nao tiver estes  

*/

function numeroInteiroFracionario(numero,darMensagem)
{
    var numeroTemp = numero;
	numeroTemp = replace(numeroTemp,',','.');
    if(cadeia_numerica(numeroTemp)||cadeia_numerica_fracionaria(numeroTemp))
	{
	    return true;
	}
	else
	{
	    if(darMensagem)
		{
	        alert('Número com formato inválido. Entre com um número inteiro, ou use apenas uma vírgula para separar a parte fracionária. Ex:  10000  ou  10002000,400');
		}
		return false;
	}

}

/*
faz o loop de alguma funcao
passada como um string
*/
function loop(funcao,tempo)
{
   eval(funcao)
   setTimeout("loop('"+funcao+"',"+tempo+")",tempo)
}

/*
transforma um string de número decimal de exibicao
em um decimal no formato flutuante normal

ex: 1.000.900,377 vira 1000900.377 

*/

function entradaValor(valor)
{
   return replace(replace(valor,".",""),",",".");
}


function Arredon (Valor,Dec)
{
	var temp
	temp = Math.pow(10,Dec)
	return ((Math.round(Valor * temp))/temp);
}


// formatavalor (valor,casasdecimas,(0=trunca,1=arredonda))
function FormataValor(valor,casasDecimais,arredonda) 
{
	var numeroString,
	    posicaoDaVirgula,
	    parteInteira,
	    parteFlutuante,
	    quantidadeDeZeros,
	    contador,
	    quantidadeDePontos,
	    sinalNegativo,
	    vaiUm,
	    total,
	    digito,
	    quantidadeAntesDoPonto,
	    inicioDepoisDoPonto,
	    quantidadeDepoisDoPonto;

	casasDecimais=eval(casasDecimais)


	if (!(valor==null)) 
	{
       	if (casasDecimais==null) 
	       {
		    casasDecimais = 0				
		}
		if (arredonda==null) 
		{
		    arredonda = 0
		}
		
		
		numeroString = String(valor)
		
		if (numeroString=="") 
		    {
		    numeroString = "0"
		    }			
		
		if (casasDecimais>0) 
		    {
		    casasDecimais = casasDecimais + 1
		    }	
		else
		    {	
		    casasDecimais = 1
		    }
		
		posicaoDaVirgula = 0
		posicaoDaVirgula = (numeroString.indexOf("."))+1

		if (posicaoDaVirgula==0) 
		    {	
		    posicaoDaVirgula = (numeroString.indexOf(","))+1
		    } 	
		
		if (posicaoDaVirgula==1) 
		    {
		    parteInteira = "0"
		    }	
		else if (posicaoDaVirgula==0) 
		    {
		    parteInteira = numeroString
		    }
		else
		    {
		    parteInteira = numeroString.substring(0,numeroString.length - ((numeroString.length - posicaoDaVirgula)+1) )
	        }
		
		
		parteFlutuante = ""
		
		if (posicaoDaVirgula>0) 
		   {	
		    parteFlutuante = numeroString.substring(posicaoDaVirgula,numeroString.length)
		    quantidadeDeZeros = casasDecimais - (numeroString.length - posicaoDaVirgula)
		    if (parteFlutuante.length>casasDecimais) 
			{
		        parteFlutuante = parteFlutuante.substring(0,casasDecimais)
		        }
		   }	
		else
		   {
		    quantidadeDeZeros = casasDecimais
		   } 
		
		for (contador = 1;contador<=quantidadeDeZeros;contador++) 
		    {
		    parteFlutuante = parteFlutuante + "0" 
		    }	
		

		sinalNegativo = ""
		if (parteInteira.substring(0,1)=="-") 
		    {	
		    sinalNegativo = parteInteira.substring(0,1)
		    parteInteira = parteInteira.substring(1,parteInteira.length)
		    }
		
		quantidadeDePontos = parseInt(parteInteira.length/3) 
		
		if (quantidadeDePontos>0) 
		    {
		    if ((parteInteira.length%3)==0) 
			{
			 quantidadeDePontos = quantidadeDePontos - 1
		    	}
		    }
		
		if (arredonda==1) 
		    {		
		        if (parseInt(parteFlutuante.substring((parteFlutuante.length-1),parteFlutuante.length))>=5) 
			  {	
				    vaiUm = true
					total = parteFlutuante.length - 1
					while ((vaiUm) && (total > 0))
					 {
					    digito = parseInt(parteFlutuante.substring((total-1),total)) + 1
						if (digito==10) 
						    {
						    parteFlutuante = parteFlutuante.substring(0,total - 1)+"0"+parteFlutuante.substring(total,parteFlutuante.length)
						    }
						else
						    {
						    parteFlutuante = parteFlutuante.substring(0,total - 1)+String(digito)+parteFlutuante.substring(total,parteFlutuante.length)
						    vaiUm = false
						    }
						
						total = total - 1
					}
					if (vaiUm) 
					    {	
					     total = parteInteira.length
					     while ((vaiUm) && (total > 0))
						{
						    digito = parseInt(parteInteira.substring((total-1),total) + 1)
							if (digito==10) 
							    {
							    parteInteira = parteInteira.substring(0,total - 1)+"0"+parteInteira.substring(total,parteInteira.length)
							    }	
							else
							    {
							    parteInteira = parteInteira.substring(0,total - 1)+String(digito)+parteInteira.substring(total,parteInteira.length)
							    vaiUm = false
							    }	
							
							total = total - 1
						}
						if (vaiUm) 
						    {	
						    parteInteira = "1"+parteInteira
						    }
					    } 
				}
		   } 
		
		for (contador=1;contador<=quantidadeDePontos;contador++)
		   { 	 
		        quantidadeAntesDoPonto = parteInteira.length-((3*contador)+(contador - 1))
			inicioDepoisDoPonto = 1 + parteInteira.length-((3*contador)+(contador - 1)) 
			quantidadeDepoisDoPonto = (3*contador)+(contador - 1)
			parteInteira = parteInteira.substring(0,quantidadeAntesDoPonto) + "." + parteInteira.substring((inicioDepoisDoPonto-1),(quantidadeDepoisDoPonto+inicioDepoisDoPonto-1))
		   }	
		
		if (parteFlutuante.length==1) 
		    {	
		    numeroString = sinalNegativo + parteInteira  
		    }	
		else
		    {	
		    numeroString = sinalNegativo + parteInteira + "," + parteFlutuante.substring(0,parteFlutuante.length-1) 
		    }
	    
        return(numeroString) 		
	 } 	
	else
	 {  	
	    return("")
	 }
 }
 
 function ChecaValores(val,name,casasdecimais) {
  if (val == '') val = 0;
  if (countChars(val,",") > 1) {
    alert('Número inválido.Use somente uma vírgula para separar a parte fracionária.Ex:10000,00');
    document.all(name).value = '';
    document.all(name).focus();
    window.event.returnValue = false;
  }
  else {
    val1 = val.replace(".",""); 
    val1 = val1.replace(",",".");
    if (isNaN(parseFloat(val1)) && val1 != '') {
      alert("Número inválido");
      document.all(name).value = '';
      document.all(name).focus();
      window.event.returnValue = false;
    }
    else {
      val1 = parseFloat(val1);
      document.all(name).value = FormataValor(val1,casasdecimais,1);
    }
    
  }

}

function chkVal(val,inteiro) {
  val = val + "";
  val = val.replace(".","");
  val = val.replace(",",".");
  val = val.replace(" ","");
  if (isNaN(val))
    return false;

  if (inteiro == false) {
    return true;
  }
  else {
   val_int = Math.floor(val);
   if (val - val_int > 0)
     return false;
   else
     return true;  
  }
  
}


//********************************    
    function isEmpty(val) {
    // retorna true se val estiver vazio
      if (val == "")
        return true
      else  
        return false
    }
    
//********************************    
    function isNull(val) {      
    // retorna true se val estiver null
      if (val == null)
        return true
      else  
        return false      
    }
    
//********************************    
    function isNullOrEmpty(val) {
    //retorna true se val for vazio ou null
      if (isEmpty(val) || isNull(val))
        return true
      else
        return false
    }

//************************************
function count(ch,str) {
  //retorna quantas vezes caracter ch ocorre no string str
  n = 0;
  for(i=0;i<str.length;i++) {
    if (str.charAt(i) == ch) 
     n++;
  }
  return n;
}

//************************************
function split(str,ch) {
  //igual ao split do vb
  
  if (count(ch,str) == 0) {
    var ret = new Array(1);
    ret[0] = str;
    return ret
  }
  else {
    ret = new Array(count(ch,str)+1);
    index = 0;
    start = 0;
    while (index < ret.length) { 
      end = str.indexOf(ch,start);
      if (start == end)
        ret[index] = ""
      else {
        if (end == -1)
          ret[index] = str.substring(start,str.length);
        else  
          ret[index] = str.substring(start,end);
      }  
      index++;
      start = end + 1;    
    }
    return ret;
  }
  
  
}