import {Component} from "react";

class ErrorBoundary extends Component {
    constructor(props){
        super(props)
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log('error', error)
        console.log('errorInfo', errorInfo)
        this.setState({
            hasError:true
        })
    }
    render() {

        // É possível inserir, no return, uma mensagem amigável ao usuário, imagem, informação ou instrução
        if(this.state.hasError) {
            return ("Vixe! Deu ruim no app.")
            
        }
        return this.props.children;
    }
}

export default ErrorBoundary;