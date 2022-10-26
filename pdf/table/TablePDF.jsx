import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import shortid from 'shortid';

const TablePDF = ({ data }) => {
    const BORDER_COLOR = '#bfbfbf';
    const BORDER_STYLE = 'solid';
    const COLN_WIDTH = 100 / Object.keys(data[0]).length;
    const styles = StyleSheet.create({
        body: {
            padding: 10,
        },
        table: {
            display: 'table',
            width: 'auto',
            borderStyle: BORDER_STYLE,
            borderColor: BORDER_COLOR,
            borderWidth: 1,
            borderRightWidth: 0,
            borderBottomWidth: 0,
        },
        tableRow: {
            margin: 'auto',
            flexDirection: 'row',
        },
        tableColHeader: {
            width: COLN_WIDTH + '%',
            borderStyle: BORDER_STYLE,
            borderColor: BORDER_COLOR,
            borderBottomColor: '#000',
            borderWidth: 1,
            borderLeftWidth: 0,
            borderTopWidth: 0,
        },
        tableCol: {
            width: COLN_WIDTH + '%',
            borderStyle: BORDER_STYLE,
            borderColor: BORDER_COLOR,
            borderWidth: 1,
            borderLeftWidth: 0,
            borderTopWidth: 0,
        },
        tableCellHeader: {
            margin: 5,
            fontSize: 12,
            fontWeight: 500,
        },
        tableCell: {
            margin: 5,
            fontSize: 10,
        },
    });

    return (
        <View style={styles.table}>
            <View style={styles.tableRow}>
                {typeof data[0] === 'object' &&
                    Object.entries(data[0]).map(([k, v]) => (
                        // <th key={k}>{v}</th>
                        <View style={styles.tableColHeader} key={k}>
                            <Text style={styles.tableCellHeader}>{v}</Text>
                        </View>
                    ))}
            </View>
            {data.slice(1).map((item) => (
                <View style={styles.tableRow} key={shortid.generate()}>
                    {typeof item === 'object' &&
                        Object.entries(item).map(([k, v]) => (
                            <View style={styles.tableCol} key={k}>
                                <Text style={styles.tableCell}>{v}</Text>
                            </View>
                        ))}
                </View>
            ))}
        </View>
    );
};

export default TablePDF;
