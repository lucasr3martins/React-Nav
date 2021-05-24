import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from  '@react-navigation/stack';
import { StyleSheet, Text, View} from "react-native";
import { SocialIcon } from 'react-social-icons';

function SouCliente({ navigation }) {
  return (
    <View style={styles.all}>
    <View style={styles.container}>
    <Text style={styles.toptextsub}>___</Text>     
    <View style={{flexDirection:'row'}}>

    <Text style={styles.toptextmp}>SOU CLIENTE</Text><Text style={styles.toptextmp2}>SOU MÉDICO</Text>
    </View>
      <Text style={styles.titletextmp} onPress={()=> navigation.navigate('ExamesServicos')}>EXAMES E SERVIÇOS<Text style={styles.expand}> ❯ </Text> </Text> 

      <Text style={{color: 'white' }}>________________________________________________</Text>
      
      <Text style={styles.titletextmp} onPress={()=> navigation.navigate('Home')}>UNIDADES</Text> 

      <Text style={{color: 'white' }}>________________________________________________</Text>
      
      <Text style={styles.titletextmp} onPress={()=> navigation.navigate('Home')}>CONVÊNIOS</Text> 

      <Text style={{color: 'white' }}>________________________________________________</Text>
      
      <Text style={styles.titletextmp} onPress={()=> navigation.navigate('oSabin')}>O SABIN <Text style={styles.expand}> ❯ </Text></Text> 

      <Text style={{color: 'white' }}>________________________________________________</Text>
      
      <Text style={styles.titletextmp} onPress={()=> navigation.navigate('CentraldeAtendimento')}>CENTRAL DE ATENDIMENTO <Text style={styles.expand}> ❯ </Text></Text> 
      
      <Text style={{color: 'white' }}>________________________________________________</Text>
      
      <View style={styles.socials}><View style={{flex:0.09}}>
      <SocialIcon bgColor="#616263" style={{height: 20, width: 20}} url="https://google.com" network="instagram" />
      </View><View style={{flex:0.09}}>
      <SocialIcon bgColor="#616263" style={{height: 20, width: 20}} url="https://google.com" network="facebook" />
      </View><View style={{flex:0.09}}>
      <SocialIcon bgColor="#616263" style={{height: 20, width: 20}} url="https://google.com" network="linkedin" />
      </View><View style={{flex:0.09}}>
      <SocialIcon bgColor="#616263" style={{height: 20, width: 20}} url="https://google.com" network="youtube" />
      </View><View style={{flex:0.09}}>
      <SocialIcon bgColor="#616263" style={{height: 20, width: 20}} url="https://google.com" network="twitter" />
      </View>
      </View>
      </View>
      </View>
  )
}

function ExamesServicos() {
  return (
    <View style={styles.all}>
    <View style={styles.container}>
      
    <Text style={styles.toptext}>{`EXAMES E SERVIÇOS\n`}</Text>
    <Text style={styles.toptextsub}>__</Text>


      <Text style={styles.titletext}>{`EXAMES\n`}</Text>
      <Text style={{color: 'white' }}>________________________________________________</Text>
      <Text style={styles.text2}>
      <Text style={styles.titletext}>» </Text> 
      RESULTADO DE EXAMES{'\n'}</Text>

      <Text style={styles.text2}>
      <Text style={styles.titletext}>» </Text> 
      EXAMES LABORATORIAIS{'\n'}</Text>

      <Text style={styles.text2}>
      <Text style={styles.titletext}>» </Text> 
      DIAGNÓSTICO POR IMAGEM{'\n'}</Text>

      <Text style={styles.text2}>
      <Text style={styles.titletext}>» </Text> 
      RELAÇÃO DE EXAMES{'\n'}</Text>

      <Text style={styles.text2}>
      <Text style={styles.titletext}>» </Text> 
      EXAMES COVID-19{'\n'}</Text>

      <Text style={styles.text2}>
      <Text style={styles.titletext}>» </Text> 
      DÚVIDAS SOBRE A COLETA{'\n'}</Text>

      <Text style={styles.text2}>
      <Text style={styles.titletext}>» </Text> 
      PERGUNTAS FREQUENTES{'\n'}</Text>

      <Text style={styles.text2}>
      <Text style={styles.titletext}>» </Text> 
      CARTÃO SAÚDE{'\n'}</Text>

      <Text style={styles.titletext}>
      SERVIÇOS{'\n'}</Text>
      <Text style={{color: 'white' }}>________________________________________________</Text>
      <Text style={styles.text2}>
      <Text style={styles.titletext}>» </Text> 
      VACINAS{'\n'}</Text>

      <Text style={styles.text2}>
      <Text style={styles.titletext}>» </Text> 
      ATENDIMENTO EM UMA UNIDADE{'\n'}</Text>

      <Text style={styles.text2}>
      <Text style={styles.titletext}>» </Text> 
      ATENDIMENTO MÓVEL{'\n'}</Text>

      <Text style={styles.text2}>
      <Text style={styles.titletext}>» </Text> 
      CALENDÁRIO VACINAL{'\n'}</Text>

      <Text style={styles.text2}>
      <Text style={styles.titletext}>» </Text> 
      CHECK-UP EXECUTIVO{'\n'}</Text>

      <Text style={styles.text2}>
      <Text style={styles.titletext}>» </Text> 
      COMPRE ONLINE{'\n'}</Text>
    </View>
    </View>
    
  )
}

function CentraldeAtendimento() {
  return (
  
    <View style={styles.all}>
    <View style={styles.container}>

    <Text style={styles.toptext}>{`CENTRAL DE ATENDIMENTO\n`}</Text>
    <Text style={styles.toptextsub}>__</Text>

      <Text style={styles.titletext}>{`CANAIS DE ATENDIMENTO\n`}</Text>
      <Text style={{color: 'white' }}>________________________________________________</Text>

      <Text style={styles.text2}>
      <Text style={styles.titletext}>» </Text> 
      CENTRAL DE ATENDIMENTO{'\n'}</Text>

      <Text style={styles.text2}>
      <Text style={styles.titletext}>» </Text> 
      PERGUNTAS FREQUENTES{'\n'}</Text>

      <Text style={styles.text2}>
      <Text style={styles.titletext}>» </Text> 
      ATENDIMENTO EM UMA UNIDADE{'\n'}</Text>

      <Text style={styles.text2}>
      <Text style={styles.titletext}>» </Text> 
      ATENDIMENTO MÓVEL{'\n'}</Text>

      <Text style={styles.text2}>
      <Text style={styles.titletext}>» </Text> 
      FALE COM O SABIN{'\n'}</Text>

      <Text style={styles.text2}>
      <Text style={styles.titletext}>» </Text> 
      FALE COM A PRESIDENTE{'\n'}</Text>

      <Text style={styles.text2}>
      <Text style={styles.titletext}>» </Text> 
      SALA DE IMPRENSA{'\n'}</Text>

      <Text style={styles.titletext}>{`ORÇAMENTO\n`}</Text>
      <Text style={{color: 'white' }}>________________________________________________</Text>

      <Text style={styles.text2}>
      <Text style={styles.titletext}>» </Text> 
      FAÇA SEU ORÇAMENTO{'\n'}</Text>

      <Text style={styles.titletext}>{`VEJA TAMBÉM\n`}</Text>
      <Text style={{color: 'white' }}>________________________________________________</Text>

      <Text style={styles.text2}>
      <Text style={styles.titletext}>» </Text> 
      CHECK-UP EXECUTIVO{'\n'}</Text>

      <Text style={styles.text2}>
      <Text style={styles.titletext}>» </Text> 
      CARTÃO SAÚDE{'\n'}</Text>

    </View>
    </View>
  )
}

function oSabin() {
  return (
    
    <View style={styles.all}>
    <View style={styles.container}>

    <Text style={styles.toptext}>{`O SABIN\n`}</Text>
    <Text style={styles.toptextsub}>__</Text>

      <Text style={styles.titletext}>{`O SABIN\n`}</Text>
      <Text style={{color: 'white' }}>________________________________________________</Text>
    
      <Text style={styles.text2}>
      <Text style={styles.titletext}>» </Text> 
      QUEM SOMOS{'\n'}</Text>

      <Text style={styles.text2}>
      <Text style={styles.titletext}>» </Text> 
      NOSSA HISTÓRIA{'\n'}</Text>

      <Text style={styles.text2}>
      <Text style={styles.titletext}>» </Text> 
      GOVERNANÇA CORPORATIVA{'\n'}</Text>

      <Text style={styles.text2}>
      <Text style={styles.titletext}>» </Text> 
      GESTÃO DE PESSOAS{'\n'}</Text>

      <Text style={styles.text2}>
      <Text style={styles.titletext}>» </Text> 
      INSTITUTO SABIN{'\n'}</Text>

      <Text style={styles.text2}>
      <Text style={styles.titletext}>» </Text> 
      TRABALHE CONOSCO{'\n'}</Text>
      
      <Text style={styles.titletext}>{`RECONHECIMENTOS\n`}</Text>
      <Text style={{color: 'white' }}>________________________________________________</Text>
    
      <Text style={styles.text2}>
      <Text style={styles.titletext}>» </Text> 
      NOSSOS PRÊMIOS{'\n'}</Text>
      
      <Text style={styles.text2}>
      <Text style={styles.titletext}>» </Text> 
      CERTIFICAÇÕES{'\n'}</Text>
      
      <Text style={styles.text2}>
      <Text style={styles.titletext}>» </Text> 
      SUSTENTABILIDADE{'\n'}</Text>
      
      <Text style={styles.text2}>
      <Text style={styles.titletext}>» </Text> 
      INOVAÇÃO{'\n'}</Text>
      
    </View>
    </View>
  )
}

const Stack = createStackNavigator()


const Nav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Mobile" screenOptions={{headerTitle:false, headerStyle: { height: 50, backgroundColor: '#edeff8', borderBottomWidth: 0}, animationEnabled:'horizontal'}}>
        <Stack.Screen name="Menu" component={SouCliente} />
        <Stack.Screen name="CentraldeAtendimento" component={CentraldeAtendimento}/>
        <Stack.Screen name="ExamesServicos" component={ExamesServicos}/>
        <Stack.Screen name="oSabin" component={oSabin}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}




const styles = StyleSheet.create({
  
  socials:{
    marginTop: 50,
    flexDirection:"row",
  },
  container:{
    marginLeft: 30,
    marginTop: 5,
    flex: 1,
    backgroundColor: '#edeff8'
  },
  all:{
    height: '100%',
    backgroundColor: '#edeff8'
  },
  text2:{
  fontSize: 13,
  marginTop: 9,
  textShadowColor: 'rgba(0, 0, 0, 0.2)',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 2
  },
  titletext:{
    color: '#fe4b4c',
    marginTop: 11,
    paddingTop: 15,
    fontSize: 15,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.15)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 2
  },
  expand:{
    color: '#fe4b4c',
    marginTop: 11,
    paddingTop: 5,
    fontSize: 15,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.05)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 2
  },
  toptextmp:{
    color: '#fe4b4c',
    fontSize: 11,
    textShadowColor: 'rgba(0, 0, 0, 0.15)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 2
  },
  toptext:{
    color: 'black',
    fontSize: 11,
    textShadowColor: 'rgba(0, 0, 0, 0.15)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 2
  },
  toptextmp2:{
    color: 'black',
    fontSize: 11,
    paddingLeft:20,
    textShadowColor: 'rgba(0, 0, 0, 0.15)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 2
  },
  toptextsub:{
    color: '#fe4b4c',
    fontSize: 50,
    marginTop: -50,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 2,
  },
  titletextmp:{
    color: 'black',
    marginTop: 11,
    fontSize: 14,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 2
  },
  
});

export default Nav;