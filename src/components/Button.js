import React from 'react';
import { StyleSheet, Text, Dimensions, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888'
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#fa8321',
    },
    specialButton: {
        color: '#696969',
        backgroundColor: '#c0c0c0',
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2
    }
});


//touchable espaço onde se toca no botão, vai receber o evento onPress pelo props OnClick
//text recebe o style definido na classe e passa as propriedades para o label recebido no props

export default props => {
    const stylesButton = [styles.button]
    if (props.double) stylesButton.push(styles.buttonDouble)
    if (props.special) stylesButton.push(styles.specialButton)
    if (props.operation) stylesButton.push(styles.operationButton)
    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}