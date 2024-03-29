var jsonInfo = [
	{
		"MCU"    : "MSP430",
		"Device" : "MSP430F550x",
		"Filter" : "MSP430F55(0\\d|10)"
	}
];

var jsonObjC = [
	{"SourcePreview" : "MSP430F55xx_1.c",                                   "Description" : "Toggle P1.0/LED"},
	{"SourcePreview" : "MSP430F55xx_adc_01.c",                              "Description" : "ADC12, Sample A0, Set P1.0 if A0 > 0.5*AVcc"},
	{"SourcePreview" : "MSP430F55xx_adc_02.c",                              "Description" : "ADC12, Using the Internal Reference"},
	{"SourcePreview" : "MSP430F55xx_adc_05.c",                              "Description" : "ADC12, Using an External Reference"},
	{"SourcePreview" : "MSP430F55xx_adc_06.c",                              "Description" : "ADC12, Repeated Sequence of Conversions"},
	{"SourcePreview" : "MSP430F55xx_adc_07.c",                              "Description" : "ADC12, Repeated Single Channel Conversions"},
	{"SourcePreview" : "MSP430F55xx_adc_08.c",                              "Description" : "ADC12, Using A8 and A9 Ext Channels for Conversion"},
	{"SourcePreview" : "MSP430F55xx_adc_09.c",                              "Description" : "ADC12, Sequence of Conversions (non-repeated)"},
	{"SourcePreview" : "MSP430F55xx_adc_10.c",                              "Description" : "ADC12, Sample A10 Temp and Convert to oC and oF"},
	{"SourcePreview" : "MSP430F55xx_compB_01.c",                            "Description" : "COMPB output Toggle in LPM4; "},
	{"SourcePreview" : "MSP430F55xx_compB_02.c",                            "Description" : "COMPB output Toggle from LPM4; input channel CB1; "},
	{"SourcePreview" : "MSP430F55xx_compB_03.c",                            "Description" : "COMPB interrupt capability; "},
	{"SourcePreview" : "MSP430F55xx_compB_04.c",                            "Description" : "COMPB Toggle from LPM4; Ultra low power mode; "},
	{"SourcePreview" : "MSP430F55xx_compB_05.c",                            "Description" : "COMPB Hysteresis, CBOUT Toggle in LPM4; High speed mode"},
	{"SourcePreview" : "MSP430F55xx_compB_06.c",                            "Description" : "COMPB and TIMERAx interaction (TA0.1, TA1.1)"},
	{"SourcePreview" : "MSP430F55xx_dma_01.c",                              "Description" : "DMA0, Repeated Block to-from RAM, Software Trigger"},
	{"SourcePreview" : "MSP430F55xx_dma_02.c",                              "Description" : "DMA0, Repeated Block UCA1UART 9600, TACCR2, ACLK"},
	{"SourcePreview" : "MSP430F55xx_dma_03.c",                              "Description" : "SPI TX & RX using DMA0 & DMA1 Single Transfer in Fixed Address Mode"},
	{"SourcePreview" : "MSP430F55xx_dma_04.c",                              "Description" : "DMA0, Single transfer using ADC12 triggered by TimerB"},
	{"SourcePreview" : "MSP430F55xx_flashwrite_01.c",                       "Description" : "Single-Byte Flash In-System Programming, Copy SegC to SegD"},
	{"SourcePreview" : "MSP430F55xx_flashwrite_02.c",                       "Description" : "Flash In-System Programming w/ Long-Word write at 0x1800"},
	{"SourcePreview" : "MSP430F55xx_flashwrite_03.c",                       "Description" : "Bank Erase from a Block while Executing Code from Another Block."},
	{"SourcePreview" : "MSP430F55xx_LPM3_01.c",                             "Description" : "Enters LPM3 with ACLK = LFXT1, REF0 disabled, VUSB LDO and SLDO disabled, SVS disabled"},
	{"SourcePreview" : "MSP430F55xx_LPM3_02.c",                             "Description" : "Enters LPM3 (ACLK = VLO)"},
	{"SourcePreview" : "MSP430F55xx_LPM4.c",                                "Description" : "Enters  LPM4"},
	{"SourcePreview" : "MSP430F55xx_NMI.c",                                 "Description" : "NMI on a high-to-low transition on the RST/NMI pin from LPM4"},
	{"SourcePreview" : "MSP430F55xx_OF_LFXT1_nmi.c",                        "Description" : "LFXT1 Oscillator Fault Detection"},
	{"SourcePreview" : "MSP430F55xx_P1_01.c",                               "Description" : "Software Poll P1.4, Set P1.0 if P1.4 = 1"},
	{"SourcePreview" : "MSP430F55xx_P1_02.c",                               "Description" : "Software Port Interrupt Service on P1.4 from LPM4 with Internal Pull-up Resistance Enabled"},
	{"SourcePreview" : "MSP430F55xx_P1_03.c",                               "Description" : "Software Port Interrupt Service on P1.4 from LPM4"},
	{"SourcePreview" : "MSP430F55xx_PA_05.c",                               "Description" : "Write a Word to Port A (Port1+Port2)"},
	{"SourcePreview" : "MSP430F55xx_PB_05.c",                               "Description" : "Write a Word to Port B (Port3+Port4)"},
	{"SourcePreview" : "MSP430F55xx_PortMap_01.c",                          "Description" : "Port Mapping Port4; Single runtime configuration"},
	{"SourcePreview" : "MSP430F55xx_PortMap_02.c",                          "Description" : "Port Mapping single function to multiple pins; Single runtime configuration."},
	{"SourcePreview" : "MSP430F55xx_PortMap_03.c",                          "Description" : "Port Map single function to multiple pins; Multiple runtime configurations"},
	{"SourcePreview" : "MSP430F55xx_refctl_adc_02.c",                       "Description" : "ADC12, Using REFCTL0 control register to configure internal reference"},
	{"SourcePreview" : "MSP430F55xx_ta0_02.c",                              "Description" : "Timer0_A5, Toggle P1.0, CCR0 Up Mode ISR, DCO SMCLK"},
	{"SourcePreview" : "MSP430F55xx_ta0_04.c",                              "Description" : "Timer0_A5, Toggle P1.0, Overflow ISR, 32kHz ACLK"},
	{"SourcePreview" : "MSP430F55xx_ta0_16.c",                              "Description" : "Timer0_A5, PWM TA1.1-2, Up Mode, DCO SMCLK"},
	{"SourcePreview" : "MSP430F55xx_ta0_17.c",                              "Description" : "Timer0_A5, PWM TA1.1-2, Up Mode, 32kHz ACLK"},
	{"SourcePreview" : "MSP430F55xx_ta1_01.c",                              "Description" : "Timer1_A3, Toggle P1.0, CCR0 Cont. Mode ISR, DCO SMCLK"},
	{"SourcePreview" : "MSP430F55xx_ta1_02.c",                              "Description" : "Timer1_A3, Toggle P1.0, CCR0 Up Mode ISR, DCO SMCLK"},
	{"SourcePreview" : "MSP430F55xx_ta1_03.c",                              "Description" : "Timer1_A3, Toggle P1.0, Overflow ISR, DCO SMCLK"},
	{"SourcePreview" : "MSP430F55xx_ta1_04.c",                              "Description" : "Timer1_A3, Toggle P1.0, Overflow ISR, 32kHz ACLK"},
	{"SourcePreview" : "MSP430F55xx_ta1_05.c",                              "Description" : "Timer1_A3, Toggle P1.0, CCR0 Up Mode ISR, 32kHz ACLK"},
	{"SourcePreview" : "MSP430F55xx_ta1_11.c",                              "Description" : "Timer1_A3, Toggle P1.7/TA1.0, Up Mode, 32kHz ACLK"},
	{"SourcePreview" : "MSP430F55xx_ta1_13.c",                              "Description" : "Timer1_A3, Toggle P1.7/TA1.0, Up/Down Mode, DCO SMCLK"},
	{"SourcePreview" : "MSP430F55xx_ta1_14.c",                              "Description" : "Timer1_A3, Toggle P1.7/TA1.0, Up/Down Mode, 32kHz ACLK"},
	{"SourcePreview" : "MSP430F55xx_ta1_16.c",                              "Description" : "Timer1_A3, PWM TA1.1-2, Up Mode, DCO SMCLK"},
	{"SourcePreview" : "MSP430F55xx_ta1_17.c",                              "Description" : "Timer1_A3, PWM TA1.1-2, Up Mode, 32kHz ACLK"},
	{"SourcePreview" : "MSP430F55xx_ta1_19.c",                              "Description" : "Timer1_A3, PWM TA1.1-2, Up/Down Mode, DCO SMCLK"},
	{"SourcePreview" : "MSP430F55xx_ta1_20.c",                              "Description" : "Timer1_A3, PWM TA1.1-2, Up/Down Mode, 32kHz ACLK"},
	{"SourcePreview" : "MSP430F55xx_ta2_01.c",                              "Description" : "Timer2_A3, Toggle P1.0, CCR0 Cont. Mode ISR, DCO SMCLK"},
	{"SourcePreview" : "MSP430F55xx_ta2_03.c",                              "Description" : "Timer2_A3, Toggle P1.0, Overflow ISR, DCO SMCLK"},
	{"SourcePreview" : "MSP430F55xx_ta2_08.c",                              "Description" : "Timer2_A3, Toggle P1.0;P2.3-5, Cont. Mode ISR, 32kHz ACLK"},
	{"SourcePreview" : "MSP430F55xx_ta2_14.c",                              "Description" : "Timer2_A3, Toggle P2.3/TA2.0, Up/Down Mode, 32kHz ACLK"},
	{"SourcePreview" : "MSP430F55xx_ta2_19.c",                              "Description" : "Timer2_A3, PWM TA1.1-2, Up/Down Mode, DCO SMCLK"},
	{"SourcePreview" : "MSP430F55xx_tb_01.c",                               "Description" : "Timer_B, Toggle P1.0, CCR0 Cont. Mode ISR, DCO SMCLK"},
	{"SourcePreview" : "MSP430F55xx_tb_02.c",                               "Description" : "Timer_B, Toggle P1.0, CCR0 Up Mode ISR, DCO SMCLK"},
	{"SourcePreview" : "MSP430F55xx_tb_03.c",                               "Description" : "Timer_B, Toggle P1.0, Overflow ISR, DCO SMCLK"},
	{"SourcePreview" : "MSP430F55xx_tb_04.c",                               "Description" : "Timer_B, Toggle P1.0, Overflow ISR, 32kHz ACLK"},
	{"SourcePreview" : "MSP430F55xx_tb_05.c",                               "Description" : "Timer_B, Toggle P1.0, CCR0 Up Mode ISR, 32kHz ACLK"},
	{"SourcePreview" : "MSP430F55xx_tb_10.c",                               "Description" : "Timer_B, PWM TB1-6, Up Mode, DCO SMCLK"},
	{"SourcePreview" : "MSP430F55xx_UCS_01.c",                              "Description" : "Software Toggle P1.1 at Default DCO "},
	{"SourcePreview" : "MSP430F55xx_UCS_02.c",                              "Description" : "Software Toggle P1.1 with 8MHz DCO"},
	{"SourcePreview" : "MSP430F55xx_UCS_03.c",                              "Description" : "Software Toggle P1.1 with 12MHz DCO"},
	{"SourcePreview" : "MSP430F55xx_UCS_04.c",                              "Description" : "FLL+, Runs Internal DCO at 2.45MHz"},
	{"SourcePreview" : "MSP430F55xx_UCS_05.c",                              "Description" : "VLO sources ACLK"},
	{"SourcePreview" : "MSP430F55xx_UCS_06.c",                              "Description" : "XT1 sources ACLK"},
	{"SourcePreview" : "MSP430F55xx_UCS_07.c",                              "Description" : "FLL+, Output 32kHz Xtal + HF Xtal + Internal DCO"},
	{"SourcePreview" : "MSP430F55xx_UCS_08.c",                              "Description" : "XT2 sources MCLK & SMCLK"},
	{"SourcePreview" : "MSP430F55xx_UCS_10.c",                              "Description" : "Software Toggle P1.1 with 25MHz DCO"},
	{"SourcePreview" : "MSP430F55xx_uscia0_spi_09.c",                       "Description" : "USCI_A0, SPI 3-Wire Master Incremented Data"},
	{"SourcePreview" : "MSP430F55xx_uscia0_spi_10.c",                       "Description" : "USCI_A0, SPI 3-Wire Slave Data Echo"},
	{"SourcePreview" : "MSP430F55xx_uscia0_uart_01.c",                      "Description" : "USCI_A0, 115200 UART Echo ISR, DCO SMCLK"},
	{"SourcePreview" : "MSP430F55xx_uscia0_uart_02.c",                      "Description" : "USCI_A0, Ultra-Low Pwr UART 2400 Echo ISR, 32kHz ACLK"},
	{"SourcePreview" : "MSP430F55xx_uscia0_uart_03.c",                      "Description" : "USCI_A0, Ultra-Low Pwr UART 9600 Echo ISR, 32kHz ACLK"},
	{"SourcePreview" : "MSP430F55xx_uscia0_uart_04.c",                      "Description" : "USCI_A0, 9600 UART, SMCLK, LPM0, Echo with over-sampling"},
	{"SourcePreview" : "MSP430F55xx_uscib0_i2c_04.c",                       "Description" : "USCI_B0 I2C Master RX single bytes from MSP430 Master"},
	{"SourcePreview" : "MSP430F55xx_uscib0_i2c_05.c",                       "Description" : "USCI_B0 I2C Slave TX single bytes to MSP430 Slave"},
	{"SourcePreview" : "MSP430F55xx_uscib0_i2c_06.c",                       "Description" : "USCI_B0 I2C Master TX single bytes to MSP430 Slave"},
	{"SourcePreview" : "MSP430F55xx_uscib0_i2c_07.c",                       "Description" : "USCI_B0 I2C Slave RX single bytes from MSP430 Master"},
	{"SourcePreview" : "MSP430F55xx_uscib0_i2c_08.c",                       "Description" : "USCI_B0 I2C Master TX multiple bytes to MSP430 Slave"},
	{"SourcePreview" : "MSP430F55xx_uscib0_i2c_09.c",                       "Description" : "USCI_B0 I2C Slave RX multiple bytes from MSP430 Master"},
	{"SourcePreview" : "MSP430F55xx_uscib0_i2c_10.c",                       "Description" : "USCI_B0 I2C Master RX multiple bytes from MSP430 Slave"},
	{"SourcePreview" : "MSP430F55xx_uscib0_i2c_11.c",                       "Description" : "USCI_B0 I2C Slave TX multiple bytes to MSP430 Master"},
	{"SourcePreview" : "MSP430F55xx_usci_i2c_standard_master.c",            "Description" : "USCI_B0, I2C Master multiple byte TX/RX"},
	{"SourcePreview" : "MSP430F55xx_usci_i2c_standard_slave.c",             "Description" : "USCI_B0, I2C Slave multiple byte TX/RX"},
	{"SourcePreview" : "MSP430F55xx_usci_spi_standard_master.c",            "Description" : "USCI_A0, SPI 3-Wire Master multiple byte RX/TX"},
	{"SourcePreview" : "MSP430F55xx_usci_spi_standard_slave.c",             "Description" : "USCI_A0, SPI 3-Wire Slave multiple byte RX/TX"},
	{"SourcePreview" : "MSP430F55xx_usci_uart_standard_transceiver.c",      "Description" : "USCI_A0, UART Echo received character"},
	{"SourcePreview" : "MSP430F55xx_WDT_01.c",                              "Description" : "WDT, Toggle P1.0, Interval Overflow ISR, DCO SMCLK"},
	{"SourcePreview" : "MSP430F55xx_WDT_02.c",                              "Description" : "WDT, Toggle P1.0, Interval Overflow ISR, 32kHz ACLK"},
	{"SourcePreview" : "MSP430F55xx_WDT_04.c",                              "Description" : "WDT+ Failsafe Clock, WDT mode, DCO SMCLK"},
	{"SourcePreview" : "MSP430F55xx_WDT_05.c",                              "Description" : "Reset on Invalid Address fetch, Toggle P1.0"},
	{"SourcePreview" : "MSP430F55xx_WDT_06.c",                              "Description" : "WDT+ Failsafe Clock, 32kHz ACLK"}
];

