import { useState, useEffect} from 'react';

/**
 * 自定义防抖hook
 * @param value 
 * @param delay 
 * @returns 
 */
export const useDebounce = <V>(value: V, delay?: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
  
    useEffect(() => {
      const timeout = setTimeout(() => setDebouncedValue(value), delay);
      return () => clearTimeout(timeout);
    }, [value, delay]);
  
    return debouncedValue;
}

/**
 * qq号码效验
 * @param qq 
 * @returns 
 */
export const validQQ = (qq?: string) => {
  const regExp = /^[1-9]\d{4,9}$/;
  return regExp.test(String(qq));
}

/**
 *  效验数字
 * @param qq 
 * @returns 
 */
export const checkNumber = (qq: string): boolean => {
  var reg = /^[0-9]*$/;
  if(!reg.test(qq)){
     alert("请输入纯数字");
     return false;
  }
  return true;
}