import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ShoppingCart() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={styles.headerTitle}>← Bag (1 Product)</Text>
        </TouchableOpacity>
        <Text style={styles.icon}>♡</Text>
      </View>

      {/* Product Section */}
      <View style={styles.productContainer}>
        <Image
          source={{ uri: "https://via.placeholder.com/100" }}
          style={styles.productImage}
        />
        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>Lorem Ipsum is simply</Text>
          <Text style={styles.productDescription}>
            Lorem Ipsum is simply Dummy Text The Printing.
          </Text>
          <View style={styles.productOptions}>
            <Text style={styles.optionText}>Size 34 ▾</Text>
            <Text style={styles.optionText}>Qty 1 ▾</Text>
            <TouchableOpacity>
              <Text style={styles.removeButton}>✕</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.productPricing}>
            <Text style={styles.price}>₹ 1,179</Text>
            <Text style={styles.originalPrice}>₹ 2,599</Text>
            <Text style={styles.discount}>-30%</Text>
          </View>
        </View>
      </View>

      {/* Discount Code Section */}
      <View style={styles.discountContainer}>
        <TextInput
          placeholder="Apply Discount Code"
          style={styles.discountInput}
        />
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>APPLY</Text>
        </TouchableOpacity>
      </View>

      {/* Return/Refund Policy */}
      <View style={styles.policyContainer}>
        <Text style={styles.policyTitle}>RETURN/REFUND POLICY</Text>
        <Text style={styles.policyDescription}>
          In case of return, we ensure quick refund. Full amount will be refunded
          excluding Convenience Fee.
        </Text>
        <TouchableOpacity>
          <Text style={styles.readPolicyLink}>Read policy</Text>
        </TouchableOpacity>
      </View>

      {/* Order Details */}
      <View style={styles.orderDetailsContainer}>
        <Text style={styles.orderDetailsTitle}>ORDER DETAILS</Text>
        <View style={styles.orderRow}>
          <Text style={styles.orderText}>Bag Total</Text>
          <Text style={styles.orderText}>₹ 1,179.00</Text>
        </View>
        <View style={styles.orderRow}>
          <Text style={styles.orderText}>Bag Savings</Text>
          <Text style={styles.orderSavings}>- ₹ 500.00</Text>
        </View>
        <View style={styles.orderRow}>
          <Text style={styles.orderText}>Delivery Fee</Text>
          <Text style={styles.orderText}>₹ 99.00</Text>
        </View>
        <View style={styles.orderRow}>
          <Text style={styles.totalText}>Amount Payable</Text>
          <Text style={styles.totalText}>₹ 1,179</Text>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerPrice}>₹ 1,179</Text>
        <TouchableOpacity
          style={styles.paymentButton}
          onPress={() => navigation.navigate("Payment")}
        >
          <Text style={styles.paymentButtonText}>PROCEED TO PAYMENT</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f4ee",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  icon: {
    fontSize: 20,
  },
  productContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  productDetails: {
    flex: 1,
    marginLeft: 16,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  productDescription: {
    fontSize: 12,
    color: "#777",
    marginBottom: 8,
  },
  productOptions: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  optionText: {
    fontSize: 12,
    marginRight: 8,
    backgroundColor: "#f5f5f5",
    padding: 4,
    borderRadius: 4,
  },
  removeButton: {
    fontSize: 16,
    color: "#ff0000",
  },
  productPricing: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
  },
  originalPrice: {
    fontSize: 12,
    color: "#999",
    textDecorationLine: "line-through",
    marginLeft: 8,
  },
  discount: {
    fontSize: 12,
    color: "#ff0000",
    marginLeft: 8,
  },
  discountContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  discountInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    marginRight: 8,
  },
  applyButton: {
    backgroundColor: "#007bff",
    padding: 8,
    borderRadius: 4,
  },
  applyButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
  policyContainer: {
    marginBottom: 16,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
  },
  policyTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
  },
  policyDescription: {
    fontSize: 12,
    color: "#777",
    marginBottom: 8,
  },
  readPolicyLink: {
    fontSize: 12,
    color: "#007bff",
  },
  orderDetailsContainer: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  orderDetailsTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
  },
  orderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  orderText: {
    fontSize: 12,
  },
  orderSavings: {
    fontSize: 12,
    color: "#ff0000",
  },
  totalText: {
    fontSize: 14,
    fontWeight: "600",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  footerPrice: {
    fontSize: 16,
    fontWeight: "600",
  },
  paymentButton: {
    backgroundColor: "#007bff",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  paymentButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
