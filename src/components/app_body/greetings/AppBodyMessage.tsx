import './AppBodyMessage.scss'

interface IAppBodyMessageProps {
    text: string | null //Интерфейс для описания пропсов компонента
}

const AppBodyMessage = ({text}:IAppBodyMessageProps) => {

    return (
        <div className='app-body-message-wrapper'>
            {text}
        </div>
    );
};

export default AppBodyMessage;