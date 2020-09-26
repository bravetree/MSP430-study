/**
 * @file    main.c
 * @author  QianheYu
 * @date    2020.9.25
 * @version 1.0
 */

#include <msp430.h>



/**
 * @brief       initialization GPIO configuration and interrupt
 * @parameter   none
 * @return      none
 * @note
 */
void GPIO_init(void)
{
    /*-----set P8.1 and P3.7 output initially value-----*/

    P1DIR |= BIT0;                      //set P1.0 output
    P1OUT |= BIT0;                      //set P1.0 High
    P4DIR |= BIT7;                    //set P4.7 output
    P4OUT &= ~BIT7;                   //set P4.7 Low

    //-----with key£¨enable internal pull up Resistor-----
    P1REN |= BIT1;                      //enable P1.1 internal Resistor
    P1OUT |= BIT1;                      //set pull up Resistor
    P2REN |= BIT1;                    //enable P2.1 internal Resistor
    P2OUT |= BIT1;                    //set pull up Resistor

    //-----set P1.1 and P1.3 parameter for interrupt-----
    P1DIR &= ~BIT1;                     //set P1.2 input
    P1IES |= BIT1;                      //set P1.2 Low Transition Edge interrupt
    P1IE  |= BIT1;                      //enable P1.2 interrupt
    P2DIR &= ~BIT1;                   //set P2.1 input
    P2IES |= BIT1;                    //set P2.1 Low Transition Edge interrupt
    P2IE  |= BIT1;                    //enable P2.1 interrupt

    P1IFG = 0;
    P2IFG = 0;
}



/**
 * @brief deal P1 interrupt event
 * @parameter none
 * @return none
 * @note
 */
void P1_IODect(void)
{
    unsigned int Push_Key=0;
    //-----Find the only IFG bit-----
    Push_Key=P1IFG&(~P1DIR);
//    Push_key_copy=Push_Key;
    //-----delay a little time-----
    __delay_cycles(10000);                //delay 10000us
    //----Judge whether the button state is the same as before the delay-----
    if((P1IN&Push_Key)==0)                //detect the key press down
   {
     //----detect witch key was pressed down and then run this deal event function-----
      switch(Push_Key){
//     case BIT0: P10_Onclick();      break;
     case BIT1:     P11_Onclick();      break;
//     case BIT2:     P12_Onclick();      break;
//     case BIT3:     P21_Onclick();      break;
//     case BIT4:     P14_Onclick();      break;
//     case BIT5:     P15_Onclick();      break;
//     case BIT6:     P16_Onclick();      break;
//     case BIT7:     P17_Onclick();      break;
     default:       break;
     }
   }
}

/**
 * @brief deal P2 interrupt event
 * @parameter none
 * @return none
 * @note
 */
void P2_IODect(void){
    unsigned int Push_Key = 0;

    Push_Key = P2IFG&(~P2DIR);

    __delay_cycles(10000);

    if((P2IN&Push_Key) == 0){
        switch(Push_Key){
        case BIT1:  P21_Onclick();   break;
        default:    break;
        }
    }
}



/**
 * @brief       toggle P1.1
 * @parameter   none
 * @return      none
 * @note
 */
void P11_Onclick(void)
{    // -----toggle IO electric level-----
    P1OUT ^= BIT0;
}

void P21_Onclick(void)
{   // -----toggle IOµÁ∆Ω-----
    P4OUT ^= BIT7;
}


/**
 * @brief main function enable all interrupt and set power
 * @parameter void
 * @return none
 * @note
 */
int main(void)
{
	WDTCTL = WDTPW | WDTHOLD;   // stop watchdog timer

	GPIO_init();    //initialization GPIO
	__enable_interrupt();  //enable all interrupts
	__bis_SR_register(LPM3_bits);   //set low power consumption

	return 0;
}


/**
 *@brief interrupt vector for Port1
 *@parameter none
 *@return none
 *@note deal Port1 event dect and clear Port1 IFG
 */
#pragma vector = PORT1_VECTOR
__interrupt void PORT1_ISR(void)
{
    //-----enable detect Port1 event function-----
    P1_IODect();                  //if pass detection then run deal event function
    P1IFG = 0;                      //clear the Port1 IFG Register
}

/**
 *@brief interrupt vector for Port2
 *@parameter none
 *@return none
 *@note deal Port2 event and clear Port2 IFG
 */
#pragma vector = PORT2_VECTOR
__interrupt void PORT2_ISR(void){
    P2_IODect();
    P2IFG = 0;
}







