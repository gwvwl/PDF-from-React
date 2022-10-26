import React from 'react';
import { Document, Page, Text, View, StyleSheet, Line } from '@react-pdf/renderer';
import BarChartPDF from './charts/BarChart';
import { ChartSvg } from './charts/convert/WrapperChart';
import TablePDF from './table/TablePDF';

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#ffffff',
    },
    title: {
        margin: 10,
        fontSize: 20,
        fontWeight: 'bold',
        textDecoration: 'underline',
        textAlign: 'center',
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    conv: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        fontSize: 14,
        transform: `translateY(-20px)`,
    },
    line: {
        borderBottom: 1,
        marginBottom: 40,
    },
    chartTitle: {
        fontSize: 14,
        marginBottom: 5,
    },
    sideBySide: {
        display: 'flex',
        flexDirection: 'row',
    },
    paragraph: {
        fontSize: 10,
        maxWidth: '40%',
        marginTop: 20,
    },
});

const PDFDocument = ({ table, chart, chartTitle }) => {
    return (
        <Document>
            <Page size='A4' style={styles.page}>
                <Text style={styles.title}>{chartTitle}</Text>
                <View style={styles.section}>
                    <View>
                        <ChartSvg width={600} height={200}>
                            <BarChartPDF data={chart} />
                        </ChartSvg>
                    </View>
                    <View style={styles.conv}>
                        <Text style={{ color: 'red', marginRight: '15' }}>All conv.</Text>
                        <Text style={{ color: 'blue' }}>Cost / all conv.</Text>
                    </View>
                    <View>
                        <TablePDF data={table} />
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default PDFDocument;
