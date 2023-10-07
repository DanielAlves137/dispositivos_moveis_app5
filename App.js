import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

export default function App() {
  const [valorPeso, setValorPeso] = useState('');
  const [valorAltura, setValorAltura] = useState('');
  const [resultado, setResultado] = useState('');

  const verificarImc = () => {
    const peso = parseFloat(valorPeso);
    const altura = parseFloat(valorAltura);

    if (!isNaN(peso) && !isNaN(altura)) {
      if ((peso / (altura*altura)) < 18.5)
        setResultado('Abaixo do peso')
      else if ( 24.9 < (peso / (altura*altura)) >= 18.6) 
        setResultado('Peso Normal')
      else if ( 29.9 <= (peso / (altura*altura)) >= 25) 
        setResultado('Sobrepeso')
      else if ( 34.9 <= (peso / (altura*altura)) >= 30) 
        setResultado('Obesidade grau I')
      else if ( 39.9 <= (peso / (altura*altura)) >= 35) 
        setResultado('Obesidade grau II')
      else if ((peso / (altura*altura)) >= 40) 
        setResultado('Obesidade grau III')
    } else {
      setResultado('Certifique-se de inserir números válidos.');
    }
  };

  let img = 'https://www.drrogermoura.com.br/images/artigos/tabela-imc.png';

  return (
    <View style={styles.container}>
      <View>
        <Text style = {styles.titulo}>Calculo de IMC</Text>
      </View>
      <View>
        <Image
        source = {{ uri: img }}
        style = {styles.imagem}
        />
      </View>
      <View>
      <TextInput
        style={styles.input}
        placeholder="Peso"
        onChangeText={(text) => setValorPeso(text)}
        keyboardType="numeric"
        value={valorPeso}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura"
        onChangeText={(text) => setValorAltura(text)}
        keyboardType="numeric"
        value={valorAltura}
      />
      </View>
      <View>
        <TouchableOpacity style={styles.verificar} onPress={verificarImc}>
          <Text>VERIFICAR</Text>
        </TouchableOpacity>
      </View>
      <View>
      {resultado ? <Text style={styles.resultado}>{resultado}</Text> : null}
      </View>
    </View>
  );
}
