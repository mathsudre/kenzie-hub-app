import { AnimaPage } from './styles';


const AnimatedPage = ({children}) => {
    const animations = {
        initial: {opacity: 0, x: 100},
        animate: {opacity: 1, x: 0},
        exit: {opacity: 0, x: -100}
    }

    return (
        <AnimaPage 
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{duration: .5}}
        className="animatedPage"
        >
            {children}
        </AnimaPage>
    );
}

export default AnimatedPage;
