package com.joeun.mapper;


import com.joeun.dto.OrderDto;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.time.LocalDateTime;
import java.util.List;

@Mapper
public interface OrderMapper {

    void saveOrder(OrderDto orderDto);

    List<OrderDto> getAllOrders();

//    List<OrderDto> getOrdersByUserId(@Param("userId") int userId);

    List<OrderDto> getOrdersWithProductInfoByUserId(@Param("userUseId") String userUseId);

    OrderDto findOrderById(@Param("userId") String userId,@Param("productId") int productId);

//    void cancelOrder(int ordersId, String 취소, LocalDateTime cancelTime);
    void cancelOrder(@Param("ordersId") int ordersId, @Param("ordersStatus") String ordersStatus,
                 @Param("cancelTime") LocalDateTime cancelTime);
}
