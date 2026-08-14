window.NORTHSTAR_DEMO = {
  policy: {
    returnWindowDays: 30,
    standardDeliveryExplanation: "Standard Delivery provides an estimated delivery date rather than a guaranteed delivery time or live driver location."
  },
  orders: {
    NS1001: {
      identifier: "714440059",
      item: "Northstar Runner",
      size: "Medium",
      quantity: 1,
      orderDate: "10 August 2026",
      deliveryDate: "12 August 2026",
      status: "In Transit",
      deliveryMethod: "Standard Delivery",
      estimatedDelivery: "22 August 2026",
      driverStatus: "With driver — In Transit",
      returnEligible: true,
      returnReason: "Within the standard demonstration return window"
    },
    NS1002: {
      identifier: "757092013",
      item: "Northstar Classic Tee",
      size: "Large",
      quantity: 1,
      orderDate: "10 July 2026",
      deliveryDate: "12 July 2026",
      status: "Delivered",
      deliveryMethod: "Standard Delivery",
      estimatedDelivery: "12 July 2026",
      driverStatus: "Delivered",
      returnEligible: false,
      returnReason: "Outside the standard demonstration return window"
    }
  },
  inventory: {
    "Northstar Runner": {
      "Small": "In Stock",
      "Medium": "Low Stock",
      "Large": "Out of Stock"
    },
    "Northstar Classic Tee": {
      "Small": "In Stock",
      "Medium": "In Stock",
      "Large": "In Stock"
    },
    "Northstar Hoodie": {
      "Small": "Out of Stock",
      "Medium": "In Stock",
      "Large": "Out of Stock"
    },
    "Northstar Classic": {
      "Small": "In Stock",
      "Medium": "In Stock",
      "Large": "In Stock"
    }
  }
};