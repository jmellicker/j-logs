// Type definitions for @jmellicker/jlogs
// Project: https://github.com/jmellicker/jlogs
// Definitions by: User

/**
 * Interface for the jlogs library functions
 */
interface JLogs {
  /**
   * Purple text
   * @param args - Arguments to log (joined with spaces)
   */
  p(...args: any[]): void;
  
  /**
   * Blue text
   * @param args - Arguments to log (joined with spaces)
   */
  b(...args: any[]): void;
  
  /**
   * Cyan text
   * @param args - Arguments to log (joined with spaces)
   */
  c(...args: any[]): void;
  
  /**
   * Green text
   * @param args - Arguments to log (joined with spaces)
   */
  g(...args: any[]): void;
  
  /**
   * Yellow text
   * @param args - Arguments to log (joined with spaces)
   */
  y(...args: any[]): void;
  
  /**
   * Orange text
   * @param args - Arguments to log (joined with spaces)
   */
  o(...args: any[]): void;
  
  /**
   * Magenta text
   * @param args - Arguments to log (joined with spaces)
   */
  m(...args: any[]): void;
  
  /**
   * Red text
   * @param args - Arguments to log (joined with spaces)
   */
  r(...args: any[]): void;
  
  /**
   * Purple header
   * @param args - Arguments to log (joined with spaces)
   */
  ph(...args: any[]): void;
  
  /**
   * Blue header
   * @param args - Arguments to log (joined with spaces)
   */
  bh(...args: any[]): void;
  
  /**
   * Cyan header
   * @param args - Arguments to log (joined with spaces)
   */
  ch(...args: any[]): void;
  
  /**
   * Green header
   * @param args - Arguments to log (joined with spaces)
   */
  gh(...args: any[]): void;
  
  /**
   * Yellow header
   * @param args - Arguments to log (joined with spaces)
   */
  yh(...args: any[]): void;
  
  /**
   * Orange header
   * @param args - Arguments to log (joined with spaces)
   */
  oh(...args: any[]): void;
  
  /**
   * Magenta header
   * @param args - Arguments to log (joined with spaces)
   */
  mh(...args: any[]): void;
  
  /**
   * Red header
   * @param args - Arguments to log (joined with spaces)
   */
  rh(...args: any[]): void;
  
  /**
   * Purple background
   * @param args - Arguments to log (joined with spaces)
   */
  pb(...args: any[]): void;
  
  /**
   * Blue background
   * @param args - Arguments to log (joined with spaces)
   */
  bb(...args: any[]): void;
  
  /**
   * Cyan background
   * @param args - Arguments to log (joined with spaces)
   */
  cb(...args: any[]): void;
  
  /**
   * Green background
   * @param args - Arguments to log (joined with spaces)
   */
  gb(...args: any[]): void;
  
  /**
   * Yellow background
   * @param args - Arguments to log (joined with spaces)
   */
  yb(...args: any[]): void;
  
  /**
   * Orange background
   * @param args - Arguments to log (joined with spaces)
   */
  ob(...args: any[]): void;
  
  /**
   * Magenta background
   * @param args - Arguments to log (joined with spaces)
   */
  mb(...args: any[]): void;
  
  /**
   * Red background
   * @param args - Arguments to log (joined with spaces)
   */
  rb(...args: any[]): void;
  
  /**
   * Purple background with header
   * @param args - Arguments to log (joined with spaces)
   */
  pbh(...args: any[]): void;
  
  /**
   * Blue background with header
   * @param args - Arguments to log (joined with spaces)
   */
  bbh(...args: any[]): void;
  
  /**
   * Cyan background with header
   * @param args - Arguments to log (joined with spaces)
   */
  cbh(...args: any[]): void;
  
  /**
   * Green background with header
   * @param args - Arguments to log (joined with spaces)
   */
  gbh(...args: any[]): void;
  
  /**
   * Yellow background with header
   * @param args - Arguments to log (joined with spaces)
   */
  ybh(...args: any[]): void;
  
  /**
   * Orange background with header
   * @param args - Arguments to log (joined with spaces)
   */
  obh(...args: any[]): void;
  
  /**
   * Magenta background with header
   * @param args - Arguments to log (joined with spaces)
   */
  mbh(...args: any[]): void;
  
  /**
   * Red background with header
   * @param args - Arguments to log (joined with spaces)
   */
  rbh(...args: any[]): void;
  
  /**
   * Log with hashtag color codes
   * @param args - Arguments to log, can include hashtag color codes like #r, #gb, #bbh
   */
  l(...args: any[]): void;
}

declare const jlogs: JLogs;

export default jlogs;
export = jlogs;
