import React from "react";
import { StyleSheet, Image, Dimensions, Text, SafeAreaView, View } from "react-native";
import topo from '../../assets/topo.png'

const width = Dimensions.get('screen').width;

export default function Cesta() {
    return <SafeAreaView>
    <Image source={topo} style={estilo.topo} />
    <Text style={estilo.titulo}>Detalhes da Cesta</Text>

    <View style={estilo.cesta}>
        <Text style={estilo.nome}>Cesta de Verduras</Text>
        <Text style={estilo.nomeFazenda}>Jenny Jack Farm</Text>
        <Text style={estilo.descricao}>Uma cesta de produtos selecionados
            cuidadosamente da fazenda para sua cozinha</Text>
        <Text style={estilo.preco}>R$ 45,00</Text>
    </View>
    </SafeAreaView>
}

const estilo = StyleSheet.create({
    topo: {
        width: '100%',
        height: 578 / 768 * width,
    },
    titulo: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    nome: {
        color: '#464646',
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,

    },
    descricao: {
        color: '#a3a3a3',
        fontSize:16,
    },
    preco: {
        color: '#2A9F85',
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    }
});