==============A ===============

CREATE TABLE stock (
 id SERIAL primary key,
 quantity SERIAL,
 price SERIAL,
 citrus_id SERIAL
 );

INSERT INTO stock (quantity, price, citrus_id) VALUES (33, 25, 1);
INSERT INTO stock (quantity, price, citrus_id) VALUES (50, 15, 2);
INSERT INTO stock (quantity, price, citrus_id) VALUES (10, 35, 3);
INSERT INTO stock (quantity, price, citrus_id) VALUES (0, 20, 4);

 SELECT citrus.color, stock.quantity
 FROM citrus
 JOIN stock
 ON citrus.id = stock.citrus_id;

=============B ==============

fruits=# SELECT citrus, stock
fruits-#  FROM citrus
fruits-#  JOIN stock
fruits-#  ON citrus.id = stock.citrus_id;

======C =======
"BUY", "lemon",20
begin;
update stock set quantity = quantity +20 where id = 1;
update stock set quantity = quantity -30 where id = 1;
update stock set quantity = quantity +40 where id = 2;
update stock set quantity = quantity +20 where id = 2;
commit;
