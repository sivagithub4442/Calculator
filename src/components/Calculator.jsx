import { useEffect, useState } from 'react';
import '../bootstrap.min(1).css';
import '../components/Calculator.css';



  const Calculator = () => {
    const [input, setInput] = useState('');
  
    const handleButtonClick = (value) => {
      setInput((prevInput) => prevInput + value);
    };
  
    const handleClear = () => {
      setInput('');
    };
  
    const handleCalculate = () => {
      try {
        const result= eval(input);
        if(result === undefined || isNaN(result)){
            setInput('Invalid');
        }else
       { 
        setInput(eval(result).toString());
        }
      } catch (error) {
        setInput('Invalid');
      }
    };

    const handledelete = () =>{
        setInput((prevInput)=>prevInput.slice(0,-1));
    }

    

    useEffect(() => {
        const handleKeyPress = (event) => {
          switch (event.key) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '+':
            case '-':
            case '*':
            case '/':
            case '.':
            handleButtonClick(event.key)
            break;
            case 'Enter':
            event.preventDefault();
              handleCalculate();
              break;
            case 'Backspace':
              handledelete();
              break;
              case 'c':
                handleClear();
                break;
            default:
              
              break;
          }
        };
    
        window.addEventListener('keydown', handleKeyPress);
        return () => {
          window.removeEventListener('keydown', handleKeyPress);
        };
      }, []);
    
  return (
   <>
  <div style={{height:'100vh'}} className='bg-active d-flex justify-content-center'>
      <div style={{width:'400px',height:'560px'}} className="calculator mt-5 bg-dark p-3 rounded">
          <input style={{height:'80px',textAlign:'right',fontSize:'24px'}} className="input-field w-100" type="text" value={input} readOnly />
          <div className="buttons d-flex flex-column">
            <div className='d-flex flex-row mt-3'>
                <button  onClick={handleClear} className='w-50 btn btn-primary rounded'>AC</button>
                <button className='btn btn-primary rounded' onClick={handledelete}>Del</button>
                <button style={{fontSize:'28px'}} className='btn btn-warning rounded' onClick={() => handleButtonClick('/')}>/</button>
            </div>
            <div className="d-flex flex-row">
              <button className='rounded' onClick={() => handleButtonClick('7')}>7</button>
              <button className='rounded' onClick={() => handleButtonClick('8')}>8</button>
              <button className='rounded' onClick={() => handleButtonClick('9')}>9</button>
              <button style={{fontSize:'28px'}} className='btn btn-warning rounded' onClick={() => handleButtonClick('*')}>*</button>
            </div>
            <div className="d-flex flex-row">
              <button className='rounded' onClick={() => handleButtonClick('4')}>4</button>
              <button className='rounded' onClick={() => handleButtonClick('5')}>5</button>
              <button className='rounded' onClick={() => handleButtonClick('6')}>6</button>
              <button style={{fontSize:'28px'}} className='btn btn-warning rounded ' onClick={() => handleButtonClick('+')}>+</button>
            </div>
            <div className="d-flex flex-row">
              <button className='rounded' onClick={() => handleButtonClick('1')}>1</button>
              <button className='rounded' onClick={() => handleButtonClick('2')}>2</button>
              <button className='rounded' onClick={() => handleButtonClick('3')}>3</button>
              <button style={{fontSize:'28px'}} className='btn btn-warning rounded' onClick={() => handleButtonClick('-')}>-</button>
              
            </div>
            <div className="d-flex flex-row">
              
              <button className='rounded' onClick={() => handleButtonClick('0')}>0</button>
              <button className='rounded' onClick={() => handleButtonClick('.')}>.</button>
              <button style={{fontSize:'28px'}} className=' w-50 btn btn-primary rounded ' onClick={handleCalculate}>=</button>
              </div>
          </div>
        </div>
  </div>
   </>
  );
}

export default Calculator;
