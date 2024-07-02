(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-P672N2QT');
    
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    
    gtag('consent', 'update', {
      'ad_storage': 'granted',
      'analytics_storage': 'granted',
      'ad_user_data': 'granted',
      'ad_personalization': 'granted',
    });
    
    analytics.subscribe("checkout_completed", (event) => {
      dataLayer.push({ ecommerce: null });
      const items = event.data?.checkout?.lineItems?.map((item) => {
        return {
          item_id: item.variant.product.id,
          item_name: item.variant.product.title,
          price: item.variant.price.amount,
          quantity: item.quantity
        }
      });
      dataLayer.push({
        event: "purchase",
        url: event.context.document.location.href,
        ecommerce: {
          currency: event.data?.checkout?.currencyCode,
          value: event.data?.checkout?.subtotalPrice?.amount,
          transaction_id: event.data?.checkout?.order?.id,
          coupon: event.data?.checkout?.discountAllocations,
          shipping: event.data?.checkout?.shippingLine?.price?.amount,
          tax: event.data?.checkout?.totalTax?.amount,
          items: items
        }
      });
    });
    
    analytics.subscribe("payment_info_submitted", (event) => {
      dataLayer.push({ ecommerce: null });
      const items = event.data?.checkout?.lineItems?.map((item) => {
        return {
          item_id: item.variant.product.id,
          item_name: item.variant.product.title,
          price: item.variant.price.amount,
          quantity: item.quantity
        }
      });
      dataLayer.push({
        event: "add_payment_info",
        url: event.context.document.location.href,
        ecommerce: {
          currency: event.data?.checkout?.currencyCode,
          value: event.data?.checkout?.subtotalPrice?.amount,
          items: items
        }
      });
    });
    
    analytics.subscribe("checkout_shipping_info_submitted", (event) => {
      dataLayer.push({ ecommerce: null });
      const items = event.data?.checkout?.lineItems?.map((item) => {
        return {
          item_id: item.variant.product.id,
          item_name: item.variant.product.title,
          price: item.variant.price.amount,
          quantity: item.quantity
        }
      });
      dataLayer.push({
        event: "add_shipping_info",
        url: event.context.document.location.href,
        ecommerce: {
          currency: event.data?.checkout?.currencyCode,
          value: event.data?.checkout?.subtotalPrice?.amount,
          items: items
        }
      });
    });
    
    analytics.subscribe("checkout_started", (event) => {
      dataLayer.push({ ecommerce: null });
      const items = event.data?.checkout?.lineItems?.map((item) => {
        return {
          item_id: item.variant.product.id,
          item_name: item.variant.product.title,
          price: item.variant.price.amount,
          quantity: item.quantity
        }
      });
      dataLayer.push({
        event: "begin_checkout",
        url: event.context.document.location.href,
        ecommerce: {
          currency: event.data?.checkout?.currencyCode,
          value: event.data?.checkout?.subtotalPrice?.amount,
          items: items
        }
      });
    });
    
    analytics.subscribe("cart_viewed", (event) => {
      dataLayer.push({ ecommerce: null });
      const items = event.data?.cart?.lines?.map((item) => {
        return {
          item_id: item.merchandise.product.id,
          item_name: item.merchandise.product.title,
          price: item.merchandise.price.amount,
          quantity: item.quantity
        }
      });
      dataLayer.push({
        event: "view_cart",
        url: event.context.document.location.href,
        ecommerce: {
          currency: event.data?.cart?.cost?.totalAmount?.currencyCode,
          value: event.data?.cart?.cost?.totalAmount?.amount,
          items: items
        }
      });
    });
    
    analytics.subscribe("product_added_to_cart", (event) => {
      dataLayer.push({ ecommerce: null });
      dataLayer.push({
        event: "add_to_cart",
        url: event.context.document.location.href,
        ecommerce: {
          currency: event.data?.cartLine?.cost?.totalAmount?.currencyCode,
          value: event.data?.cartLine?.cost?.totalAmount?.amount,
          items: [
          {
            item_id: event.data?.cartLine?.merchandise?.product?.id,
            item_name: event.data?.cartLine?.merchandise?.product?.title,
            price: event.data?.cartLine?.merchandise?.price?.amount,
            quantity: event.data?.cartLine?.quantity
          }
          ]
        }
      });
    });
    
    analytics.subscribe("product_viewed", (event) => {
      dataLayer.push({ ecommerce: null });
      dataLayer.push({
        event: "view_item",
        url: event.context.document.location.href,
        ecommerce: {
          currency: event.data?.productVariant?.price?.currencyCode,
          value: event.data?.productVariant?.price?.amount,
          items: [
          {
            item_id: event.data?.productVariant?.product?.id,
            item_name: event.data?.productVariant?.product?.title,
            price: event.data?.productVariant?.price?.amount,
            quantity: 1
          }
          ]
        }
      });
    });
    
    analytics.subscribe("page_viewed", (event) => {
      window.dataLayer.push({
        event: "shopify_page_view",
        url: event.context.document.location.href
      });
    });

    // Shopify cusotmer events section