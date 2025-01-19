import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { InvoiceData } from '@/types/invoice';

// Define styles for PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  companyDetails: {
    marginBottom: 20,
  },
  table: {
    display: 'flex',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: 'auto',
    flexDirection: 'row',
  },
  tableCol: {
    width: '25%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCell: {
    margin: 'auto',
    marginTop: 5,
    fontSize: 10,
  },
  total: {
    marginTop: 20,
    fontSize: 12,
    fontWeight: 'bold',
  },
});

interface Props {
  data: InvoiceData;
}

const InvoicePDFDocument: React.FC<Props> = ({ data }) => {

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.header}>Invoice</Text>
          
          <View style={styles.companyDetails}>
            <Text>{data.companyDetails.name}</Text>
            <Text>{data.companyDetails.address}</Text>
            <Text>{data.companyDetails.email}</Text>
            <Text>{data.companyDetails.phone}</Text>
          </View>

          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Description</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Quantity</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Unit Price</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Amount</Text>
              </View>
            </View>

            {data.items.map((item) => (
              <View style={styles.tableRow} key={item.id}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{item.description}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{item.quantity}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>${item.unitPrice}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>${item.amount}</Text>
                </View>
              </View>
            ))}
          </View>

          <View style={styles.total}>
            <Text>Subtotal: ${data.subtotal}</Text>
            <Text>Tax: ${data.tax}</Text>
            <Text>Total: ${data.total}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default InvoicePDFDocument;
