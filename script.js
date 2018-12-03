$( document ).ready(function() {
  /*
  var longitudeArray = [-180,-179.8500,-179.7000,-179.5500,-179.4000,-179.2500,-179.1000,-178.9500,-178.8000,-178.6500,-178.5000,-178.3500,-178.2000,-178.0500,-177.9000,-177.7500,-177.6000,-177.4500,-177.3000,-177.1500,-177.0000,-176.8500,-176.7000,-176.5500,-176.4000,-176.2500,-176.1000,-175.9500,-175.8000,-175.6500,-175.5000,-175.3500,-175.2000,-175.0500,-174.9000,-174.7500,-174.6000,-174.4500,-174.3000,-174.1500,-174.0000,-173.8500,-173.7000,-173.5500,-173.4000,-173.2500,-173.1000,-172.9500,-172.8000,-172.6500,-172.5000,-172.3500,-172.2000,-172.0500,-171.9000,-171.7500,-171.6000,-171.4500,-171.3000,-171.1500,-171.0000,-170.8500,-170.7000,-170.5500,-170.4000,-170.2500,-170.1000,-169.9500,-169.8000,-169.6500,-169.5000,-169.3500,-169.2000,-169.0500,-168.9000,-168.7500,-168.6000,-168.4500,-168.3000,-168.1500,-168.0000,-167.8500,-167.7000,-167.5500,-167.4000,-167.2500,-167.1000,-166.9500,-166.8000,-166.6500,-166.5000,-166.3500,-166.2000,-166.0500,-165.9000,-165.7500,-165.6000,-165.4500,-165.3000,-165.1500,-165.0000,-164.8500,-164.7000,-164.5500,-164.4000,-164.2500,-164.1000,-163.9500,-163.8000,-163.6500,-163.5000,-163.3500,-163.2000,-163.0500,-162.9000,-162.7500,-162.6000,-162.4500,-162.3000,-162.1500,-162.0000,-161.8500,-161.7000,-161.5500,-161.4000,-161.2500,-161.1000,-160.9500,-160.8000,-160.6500,-160.5000,-160.3500,-160.2000,-160.0500,-159.9000,-159.7500,-159.6000,-159.4500,-159.3000,-159.1500,-159.0000,-158.8500,-158.7000,-158.5500,-158.4000,-158.2500,-158.1000,-157.9500,-157.8000,-157.6500,-157.5000,-157.3500,-157.2000,-157.0500,-156.9000,-156.7500,-156.6000,-156.4500,-156.3000,-156.1500,-156.0000,-155.8500,-155.7000,-155.5500,-155.4000,-155.2500,-155.1000,-154.9500,-154.8000,-154.6500,-154.5000,-154.3500,-154.2000,-154.0500,-153.9000,-153.7500,-153.6000,-153.4500,-153.3000,-153.1500,-153.0000,-152.8500,-152.7000,-152.5500,-152.4000,-152.2500,-152.1000,-151.9500,-151.8000,-151.6500,-151.5000,-151.3500,-151.2000,-151.0500,-150.9000,-150.7500,-150.6000,-150.4500,-150.3000,-150.1500,-150.0000,-149.8500,-149.7000,-149.5500,-149.4000,-149.2500,-149.1000,-148.9500,-148.8000,-148.6500,-148.5000,-148.3500,-148.2000,-148.0500,-147.9000,-147.7500,-147.6000,-147.4500,-147.3000,-147.1500,-147.0000,-146.8500,-146.7000,-146.5500,-146.4000,-146.2500,-146.1000,-145.9500,-145.8000,-145.6500,-145.5000,-145.3500,-145.2000,-145.0500,-144.9000,-144.7500,-144.6000,-144.4500,-144.3000,-144.1500,-144.0000,-143.8500,-143.7000,-143.5500,-143.4000,-143.2500,-143.1000,-142.9500,-142.8000,-142.6500,-142.5000,-142.3500,-142.2000,-142.0500,-141.9000,-141.7500,-141.6000,-141.4500,-141.3000,-141.1500,-141.0000,-140.8500,-140.7000,-140.5500,-140.4000,-140.2500,-140.1000,-139.9500,-139.8000,-139.6500,-139.5000,-139.3500,-139.2000,-139.0500,-138.9000,-138.7500,-138.6000,-138.4500,-138.3000,-138.1500,-138.0000,-137.8500,-137.7000,-137.5500,-137.4000,-137.2500,-137.1000,-136.9500,-136.8000,-136.6500,-136.5000,-136.3500,-136.2000,-136.0500,-135.9000,-135.7500,-135.6000,-135.4500,-135.3000,-135.1500,-135.0000,-134.8500,-134.7000,-134.5500,-134.4000,-134.2500,-134.1000,-133.9500,-133.8000,-133.6500,-133.5000,-133.3500,-133.2000,-133.0500,-132.9000,-132.7500,-132.6000,-132.4500,-132.3000,-132.1500,-132.0000,-131.8500,-131.7000,-131.5500,-131.4000,-131.2500,-131.1000,-130.9500,-130.8000,-130.6500,-130.5000,-130.3500,-130.2000,-130.0500,-129.9000,-129.7500,-129.6000,-129.4500,-129.3000,-129.1500,-129.0000,-128.8500,-128.7000,-128.5500,-128.4000,-128.2500,-128.1000,-127.9500,-127.8000,-127.6500,-127.5000,-127.3500,-127.2000,-127.0500,-126.9000,-126.7500,-126.6000,-126.4500,-126.3000,-126.1500,-126.0000,-125.8500,-125.7000,-125.5500,-125.4000,-125.2500,-125.1000,-124.9500,-124.8000,-124.6500,-124.5000,-124.3500,-124.2000,-124.0500,-123.9000,-123.7500,-123.6000,-123.4500,-123.3000,-123.1500,-123.0000,-122.8500,-122.7000,-122.5500,-122.4000,-122.2500,-122.1000,-121.9500,-121.8000,-121.6500,-121.5000,-121.3500,-121.2000,-121.0500,-120.9000,-120.7500,-120.6000,-120.4500,-120.3000,-120.1500,-120.0000,-119.8500,-119.7000,-119.5500,-119.4000,-119.2500,-119.1000,-118.9500,-118.8000,-118.6500,-118.5000,-118.3500,-118.2000,-118.0500,-117.9000,-117.7500,-117.6000,-117.4500,-117.3000,-117.1500,-117.0000,-116.8500,-116.7000,-116.5500,-116.4000,-116.2500,-116.1000,-115.9500,-115.8000,-115.6500,-115.5000,-115.3500,-115.2000,-115.0500,-114.9000,-114.7500,-114.6000,-114.4500,-114.3000,-114.1500,-114.0000,-113.8500,-113.7000,-113.5500,-113.4000,-113.2500,-113.1000,-112.9500,-112.8000,-112.6500,-112.5000,-112.3500,-112.2000,-112.0500,-111.9000,-111.7500,-111.6000,-111.4500,-111.3000,-111.1500,-111.0000,-110.8500,-110.7000,-110.5500,-110.4000,-110.2500,-110.1000,-109.9500,-109.8000,-109.6500,-109.5000,-109.3500,-109.2000,-109.0500,-108.9000,-108.7500,-108.6000,-108.4500,-108.3000,-108.1500,-108.0000,-107.8500,-107.7000,-107.5500,-107.4000,-107.2500,-107.1000,-106.9500,-106.8000,-106.6500,-106.5000,-106.3500,-106.2000,-106.0500,-105.9000,-105.7500,-105.6000,-105.4500,-105.3000,-105.1500,-105.0000,-104.8500,-104.7000,-104.5500,-104.4000,-104.2500,-104.1000,-103.9500,-103.8000,-103.6500,-103.5000,-103.3500,-103.2000,-103.0500,-102.9000,-102.7500,-102.6000,-102.4500,-102.3000,-102.1500,-102.0000,-101.8500,-101.7000,-101.5500,-101.4000,-101.2500,-101.1000,-100.9500,-100.8000,-100.6500,-100.5000,-100.3500,-100.2000,-100.0500,-99.9000,-99.7500,-99.6000,-99.4500,-99.3000,-99.1500,-99.0000,-98.8500,-98.7000,-98.5500,-98.4000,-98.2500,-98.1000,-97.9500,-97.8000,-97.6500,-97.5000,-97.3500,-97.2000,-97.0500,-96.9000,-96.7500,-96.6000,-96.4500,-96.3000,-96.1500,-96.0000,-95.8500,-95.7000,-95.5500,-95.4000,-95.2500,-95.1000,-94.9500,-94.8000,-94.6500,-94.5000,-94.3500,-94.2000,-94.0500,-93.9000,-93.7500,-93.6000,-93.4500,-93.3000,-93.1500,-93.0000,-92.8500,-92.7000,-92.5500,-92.4000,-92.2500,-92.1000,-91.9500,-91.8000,-91.6500,-91.5000,-91.3500,-91.2000,-91.0500,-90.9000,-90.7500,-90.6000,-90.4500,-90.3000,-90.1500,-90.0000,-89.8500,-89.7000,-89.5500,-89.4000,-89.2500,-89.1000,-88.9500,-88.8000,-88.6500,-88.5000,-88.3500,-88.2000,-88.0500,-87.9000,-87.7500,-87.6000,-87.4500,-87.3000,-87.1500,-87.0000,-86.8500,-86.7000,-86.5500,-86.4000,-86.2500,-86.1000,-85.9500,-85.8000,-85.6500,-85.5000,-85.3500,-85.2000,-85.0500,-84.9000,-84.7500,-84.6000,-84.4500,-84.3000,-84.1500,-84.0000,-83.8500,-83.7000,-83.5500,-83.4000,-83.2500,-83.1000,-82.9500,-82.8000,-82.6500,-82.5000,-82.3500,-82.2000,-82.0500,-81.9000,-81.7500,-81.6000,-81.4500,-81.3000,-81.1500,-81.0000,-80.8500,-80.7000,-80.5500,-80.4000,-80.2500,-80.1000,-79.9500,-79.8000,-79.6500,-79.5000,-79.3500,-79.2000,-79.0500,-78.9000,-78.7500,-78.6000,-78.4500,-78.3000,-78.1500,-78.0000,-77.8500,-77.7000,-77.5500,-77.4000,-77.2500,-77.1000,-76.9500,-76.8000,-76.6500,-76.5000,-76.3500,-76.2000,-76.0500,-75.9000,-75.7500,-75.6000,-75.4500,-75.3000,-75.1500,-75.0000,-74.8500,-74.7000,-74.5500,-74.4000,-74.2500,-74.1000,-73.9500,-73.8000,-73.6500,-73.5000,-73.3500,-73.2000,-73.0500,-72.9000,-72.7500,-72.6000,-72.4500,-72.3000,-72.1500,-72.0000,-71.8500,-71.7000,-71.5500,-71.4000,-71.2500,-71.1000,-70.9500,-70.8000,-70.6500,-70.5000,-70.3500,-70.2000,-70.0500,-69.9000,-69.7500,-69.6000,-69.4500,-69.3000,-69.1500,-69.0000,-68.8500,-68.7000,-68.5500,-68.4000,-68.2500,-68.1000,-67.9500,-67.8000,-67.6500,-67.5000,-67.3500,-67.2000,-67.0500,-66.9000,-66.7500,-66.6000,-66.4500,-66.3000,-66.1500,-66.0000,-65.8500,-65.7000,-65.5500,-65.4000,-65.2500,-65.1000,-64.9500,-64.8000,-64.6500,-64.5000,-64.3500,-64.2000,-64.0500,-63.9000,-63.7500,-63.6000,-63.4500,-63.3000,-63.1500,-63.0000,-62.8500,-62.7000,-62.5500,-62.4000,-62.2500,-62.1000,-61.9500,-61.8000,-61.6500,-61.5000,-61.3500,-61.2000,-61.0500,-60.9000,-60.7500,-60.6000,-60.4500,-60.3000,-60.1500,-60.0000,-59.8500,-59.7000,-59.5500,-59.4000,-59.2500,-59.1000,-58.9500,-58.8000,-58.6500,-58.5000,-58.3500,-58.2000,-58.0500,-57.9000,-57.7500,-57.6000,-57.4500,-57.3000,-57.1500,-57.0000,-56.8500,-56.7000,-56.5500,-56.4000,-56.2500,-56.1000,-55.9500,-55.8000,-55.6500,-55.5000,-55.3500,-55.2000,-55.0500,-54.9000,-54.7500,-54.6000,-54.4500,-54.3000,-54.1500,-54.0000,-53.8500,-53.7000,-53.5500,-53.4000,-53.2500,-53.1000,-52.9500,-52.8000,-52.6500,-52.5000,-52.3500,-52.2000,-52.0500,-51.9000,-51.7500,-51.6000,-51.4500,-51.3000,-51.1500,-51.0000,-50.8500,-50.7000,-50.5500,-50.4000,-50.2500,-50.1000,-49.9500,-49.8000,-49.6500,-49.5000,-49.3500,-49.2000,-49.0500,-48.9000,-48.7500,-48.6000,-48.4500,-48.3000,-48.1500,-48.0000,-47.8500,-47.7000,-47.5500,-47.4000,-47.2500,-47.1000,-46.9500,-46.8000,-46.6500,-46.5000,-46.3500,-46.2000,-46.0500,-45.9000,-45.7500,-45.6000,-45.4500,-45.3000,-45.1500,-45.0000,-44.8500,-44.7000,-44.5500,-44.4000,-44.2500,-44.1000,-43.9500,-43.8000,-43.6500,-43.5000,-43.3500,-43.2000,-43.0500,-42.9000,-42.7500,-42.6000,-42.4500,-42.3000,-42.1500,-42.0000,-41.8500,-41.7000,-41.5500,-41.4000,-41.2500,-41.1000,-40.9500,-40.8000,-40.6500,-40.5000,-40.3500,-40.2000,-40.0500,-39.9000,-39.7500,-39.6000,-39.4500,-39.3000,-39.1500,-39.0000,-38.8500,-38.7000,-38.5500,-38.4000,-38.2500,-38.1000,-37.9500,-37.8000,-37.6500,-37.5000,-37.3500,-37.2000,-37.0500,-36.9000,-36.7500,-36.6000,-36.4500,-36.3000,-36.1500,-36.0000,-35.8500,-35.7000,-35.5500,-35.4000,-35.2500,-35.1000,-34.9500,-34.8000,-34.6500,-34.5000,-34.3500,-34.2000,-34.0500,-33.9000,-33.7500,-33.6000,-33.4500,-33.3000,-33.1500,-33.0000,-32.8500,-32.7000,-32.5500,-32.4000,-32.2500,-32.1000,-31.9500,-31.8000,-31.6500,-31.5000,-31.3500,-31.2000,-31.0500,-30.9000,-30.7500,-30.6000,-30.4500,-30.3000,-30.1500,-30.0000,-29.8500,-29.7000,-29.5500,-29.4000,-29.2500,-29.1000,-28.9500,-28.8000,-28.6500,-28.5000,-28.3500,-28.2000,-28.0500,-27.9000,-27.7500,-27.6000,-27.4500,-27.3000,-27.1500,-27.0000,-26.8500,-26.7000,-26.5500,-26.4000,-26.2500,-26.1000,-25.9500,-25.8000,-25.6500,-25.5000,-25.3500,-25.2000,-25.0500,-24.9000,-24.7500,-24.6000,-24.4500,-24.3000,-24.1500,-24.0000,-23.8500,-23.7000,-23.5500,-23.4000,-23.2500,-23.1000,-22.9500,-22.8000,-22.6500,-22.5000,-22.3500,-22.2000,-22.0500,-21.9000,-21.7500,-21.6000,-21.4500,-21.3000,-21.1500,-21.0000,-20.8500,-20.7000,-20.5500,-20.4000,-20.2500,-20.1000,-19.9500,-19.8000,-19.6500,-19.5000,-19.3500,-19.2000,-19.0500,-18.9000,-18.7500,-18.6000,-18.4500,-18.3000,-18.1500,-18.0000,-17.8500,-17.7000,-17.5500,-17.4000,-17.2500,-17.1000,-16.9500,-16.8000,-16.6500,-16.5000,-16.3500,-16.2000,-16.0500,-15.9000,-15.7500,-15.6000,-15.4500,-15.3000,-15.1500,-15.0000,-14.8500,-14.7000,-14.5500,-14.4000,-14.2500,-14.1000,-13.9500,-13.8000,-13.6500,-13.5000,-13.3500,-13.2000,-13.0500,-12.9000,-12.7500,-12.6000,-12.4500,-12.3000,-12.1500,-12.0000,-11.8500,-11.7000,-11.5500,-11.4000,-11.2500,-11.1000,-10.9500,-10.8000,-10.6500,-10.5000,-10.3500,-10.2000,-10.0500,-9.9000,-9.7500,-9.6000,-9.4500,-9.3000,-9.1500,-9.0000,-8.8500,-8.7000,-8.5500,-8.4000,-8.2500,-8.1000,-7.9500,-7.8000,-7.6500,-7.5000,-7.3500,-7.2000,-7.0500,-6.9000,-6.7500,-6.6000,-6.4500,-6.3000,-6.1500,-6.0000,-5.8500,-5.7000,-5.5500,-5.4000,-5.2500,-5.1000,-4.9500,-4.8000,-4.6500,-4.5000,-4.3500,-4.2000,-4.0500,-3.9000,-3.7500,-3.6000,-3.4500,-3.3000,-3.1500,-3.0000,-2.8500,-2.7000,-2.5500,-2.4000,-2.2500,-2.1000,-1.9500,-1.8000,-1.6500,-1.5000,-1.3500,-1.2000,-1.0500,-0.9000,-0.7500,-0.6000,-0.4500,-0.3000,-0.1500,0.0000,0.1500,0.3000,0.4500,0.6000,0.7500,0.9000,1.0500,1.2000,1.3500,1.5000,1.6500,1.8000,1.9500,2.1000,2.2500,2.4000,2.5500,2.7000,2.8500,3.0000,3.1500,3.3000,3.4500,3.6000,3.7500,3.9000,4.0500,4.2000,4.3500,4.5000,4.6500,4.8000,4.9500,5.1000,5.2500,5.4000,5.5500,5.7000,5.8500,6.0000,6.1500,6.3000,6.4500,6.6000,6.7500,6.9000,7.0500,7.2000,7.3500,7.5000,7.6500,7.8000,7.9500,8.1000,8.2500,8.4000,8.5500,8.7000,8.8500,9.0000,9.1500,9.3000,9.4500,9.6000,9.7500,9.9000,10.0500,10.2000,10.3500,10.5000,10.6500,10.8000,10.9500,11.1000,11.2500,11.4000,11.5500,11.7000,11.8500,12.0000,12.1500,12.3000,12.4500,12.6000,12.7500,12.9000,13.0500,13.2000,13.3500,13.5000,13.6500,13.8000,13.9500,14.1000,14.2500,14.4000,14.5500,14.7000,14.8500,15.0000,15.1500,15.3000,15.4500,15.6000,15.7500,15.9000,16.0500,16.2000,16.3500,16.5000,16.6500,16.8000,16.9500,17.1000,17.2500,17.4000,17.5500,17.7000,17.8500,18.0000,18.1500,18.3000,18.4500,18.6000,18.7500,18.9000,19.0500,19.2000,19.3500,19.5000,19.6500,19.8000,19.9500,20.1000,20.2500,20.4000,20.5500,20.7000,20.8500,21.0000,21.1500,21.3000,21.4500,21.6000,21.7500,21.9000,22.0500,22.2000,22.3500,22.5000,22.6500,22.8000,22.9500,23.1000,23.2500,23.4000,23.5500,23.7000,23.8500,24.0000,24.1500,24.3000,24.4500,24.6000,24.7500,24.9000,25.0500,25.2000,25.3500,25.5000,25.6500,25.8000,25.9500,26.1000,26.2500,26.4000,26.5500,26.7000,26.8500,27.0000,27.1500,27.3000,27.4500,27.6000,27.7500,27.9000,28.0500,28.2000,28.3500,28.5000,28.6500,28.8000,28.9500,29.1000,29.2500,29.4000,29.5500,29.7000,29.8500,30.0000,30.1500,30.3000,30.4500,30.6000,30.7500,30.9000,31.0500,31.2000,31.3500,31.5000,31.6500,31.8000,31.9500,32.1000,32.2500,32.4000,32.5500,32.7000,32.8500,33.0000,33.1500,33.3000,33.4500,33.6000,33.7500,33.9000,34.0500,34.2000,34.3500,34.5000,34.6500,34.8000,34.9500,35.1000,35.2500,35.4000,35.5500,35.7000,35.8500,36.0000,36.1500,36.3000,36.4500,36.6000,36.7500,36.9000,37.0500,37.2000,37.3500,37.5000,37.6500,37.8000,37.9500,38.1000,38.2500,38.4000,38.5500,38.7000,38.8500,39.0000,39.1500,39.3000,39.4500,39.6000,39.7500,39.9000,40.0500,40.2000,40.3500,40.5000,40.6500,40.8000,40.9500,41.1000,41.2500,41.4000,41.5500,41.7000,41.8500,42.0000,42.1500,42.3000,42.4500,42.6000,42.7500,42.9000,43.0500,43.2000,43.3500,43.5000,43.6500,43.8000,43.9500,44.1000,44.2500,44.4000,44.5500,44.7000,44.8500,45.0000,45.1500,45.3000,45.4500,45.6000,45.7500,45.9000,46.0500,46.2000,46.3500,46.5000,46.6500,46.8000,46.9500,47.1000,47.2500,47.4000,47.5500,47.7000,47.8500,48.0000,48.1500,48.3000,48.4500,48.6000,48.7500,48.9000,49.0500,49.2000,49.3500,49.5000,49.6500,49.8000,49.9500,50.1000,50.2500,50.4000,50.5500,50.7000,50.8500,51.0000,51.1500,51.3000,51.4500,51.6000,51.7500,51.9000,52.0500,52.2000,52.3500,52.5000,52.6500,52.8000,52.9500,53.1000,53.2500,53.4000,53.5500,53.7000,53.8500,54.0000,54.1500,54.3000,54.4500,54.6000,54.7500,54.9000,55.0500,55.2000,55.3500,55.5000,55.6500,55.8000,55.9500,56.1000,56.2500,56.4000,56.5500,56.7000,56.8500,57.0000,57.1500,57.3000,57.4500,57.6000,57.7500,57.9000,58.0500,58.2000,58.3500,58.5000,58.6500,58.8000,58.9500,59.1000,59.2500,59.4000,59.5500,59.7000,59.8500,60.0000,60.1500,60.3000,60.4500,60.6000,60.7500,60.9000,61.0500,61.2000,61.3500,61.5000,61.6500,61.8000,61.9500,62.1000,62.2500,62.4000,62.5500,62.7000,62.8500,63.0000,63.1500,63.3000,63.4500,63.6000,63.7500,63.9000,64.0500,64.2000,64.3500,64.5000,64.6500,64.8000,64.9500,65.1000,65.2500,65.4000,65.5500,65.7000,65.8500,66.0000,66.1500,66.3000,66.4500,66.6000,66.7500,66.9000,67.0500,67.2000,67.3500,67.5000,67.6500,67.8000,67.9500,68.1000,68.2500,68.4000,68.5500,68.7000,68.8500,69.0000,69.1500,69.3000,69.4500,69.6000,69.7500,69.9000,70.0500,70.2000,70.3500,70.5000,70.6500,70.8000,70.9500,71.1000,71.2500,71.4000,71.5500,71.7000,71.8500,72.0000,72.1500,72.3000,72.4500,72.6000,72.7500,72.9000,73.0500,73.2000,73.3500,73.5000,73.6500,73.8000,73.9500,74.1000,74.2500,74.4000,74.5500,74.7000,74.8500,75.0000,75.1500,75.3000,75.4500,75.6000,75.7500,75.9000,76.0500,76.2000,76.3500,76.5000,76.6500,76.8000,76.9500,77.1000,77.2500,77.4000,77.5500,77.7000,77.8500,78.0000,78.1500,78.3000,78.4500,78.6000,78.7500,78.9000,79.0500,79.2000,79.3500,79.5000,79.6500,79.8000,79.9500,80.1000,80.2500,80.4000,80.5500,80.7000,80.8500,81.0000,81.1500,81.3000,81.4500,81.6000,81.7500,81.9000,82.0500,82.2000,82.3500,82.5000,82.6500,82.8000,82.9500,83.1000,83.2500,83.4000,83.5500,83.7000,83.8500,84.0000,84.1500,84.3000,84.4500,84.6000,84.7500,84.9000,85.0500,85.2000,85.3500,85.5000,85.6500,85.8000,85.9500,86.1000,86.2500,86.4000,86.5500,86.7000,86.8500,87.0000,87.1500,87.3000,87.4500,87.6000,87.7500,87.9000,88.0500,88.2000,88.3500,88.5000,88.6500,88.8000,88.9500,89.1000,89.2500,89.4000,89.5500,89.7000,89.8500,90.0000,90.1500,90.3000,90.4500,90.6000,90.7500,90.9000,91.0500,91.2000,91.3500,91.5000,91.6500,91.8000,91.9500,92.1000,92.2500,92.4000,92.5500,92.7000,92.8500,93.0000,93.1500,93.3000,93.4500,93.6000,93.7500,93.9000,94.0500,94.2000,94.3500,94.5000,94.6500,94.8000,94.9500,95.1000,95.2500,95.4000,95.5500,95.7000,95.8500,96.0000,96.1500,96.3000,96.4500,96.6000,96.7500,96.9000,97.0500,97.2000,97.3500,97.5000,97.6500,97.8000,97.9500,98.1000,98.2500,98.4000,98.5500,98.7000,98.8500,99.0000,99.1500,99.3000,99.4500,99.6000,99.7500,99.9000,100.0500,100.2000,100.3500,100.5000,100.6500,100.8000,100.9500,101.1000,101.2500,101.4000,101.5500,101.7000,101.8500,102.0000,102.1500,102.3000,102.4500,102.6000,102.7500,102.9000,103.0500,103.2000,103.3500,103.5000,103.6500,103.8000,103.9500,104.1000,104.2500,104.4000,104.5500,104.7000,104.8500,105.0000,105.1500,105.3000,105.4500,105.6000,105.7500,105.9000,106.0500,106.2000,106.3500,106.5000,106.6500,106.8000,106.9500,107.1000,107.2500,107.4000,107.5500,107.7000,107.8500,108.0000,108.1500,108.3000,108.4500,108.6000,108.7500,108.9000,109.0500,109.2000,109.3500,109.5000,109.6500,109.8000,109.9500,110.1000,110.2500,110.4000,110.5500,110.7000,110.8500,111.0000,111.1500,111.3000,111.4500,111.6000,111.7500,111.9000,112.0500,112.2000,112.3500,112.5000,112.6500,112.8000,112.9500,113.1000,113.2500,113.4000,113.5500,113.7000,113.8500,114.0000,114.1500,114.3000,114.4500,114.6000,114.7500,114.9000,115.0500,115.2000,115.3500,115.5000,115.6500,115.8000,115.9500,116.1000,116.2500,116.4000,116.5500,116.7000,116.8500,117.0000,117.1500,117.3000,117.4500,117.6000,117.7500,117.9000,118.0500,118.2000,118.3500,118.5000,118.6500,118.8000,118.9500,119.1000,119.2500,119.4000,119.5500,119.7000,119.8500,120.0000,120.1500,120.3000,120.4500,120.6000,120.7500,120.9000,121.0500,121.2000,121.3500,121.5000,121.6500,121.8000,121.9500,122.1000,122.2500,122.4000,122.5500,122.7000,122.8500,123.0000,123.1500,123.3000,123.4500,123.6000,123.7500,123.9000,124.0500,124.2000,124.3500,124.5000,124.6500,124.8000,124.9500,125.1000,125.2500,125.4000,125.5500,125.7000,125.8500,126.0000,126.1500,126.3000,126.4500,126.6000,126.7500,126.9000,127.0500,127.2000,127.3500,127.5000,127.6500,127.8000,127.9500,128.1000,128.2500,128.4000,128.5500,128.7000,128.8500,129.0000,129.1500,129.3000,129.4500,129.6000,129.7500,129.9000,130.0500,130.2000,130.3500,130.5000,130.6500,130.8000,130.9500,131.1000,131.2500,131.4000,131.5500,131.7000,131.8500,132.0000,132.1500,132.3000,132.4500,132.6000,132.7500,132.9000,133.0500,133.2000,133.3500,133.5000,133.6500,133.8000,133.9500,134.1000,134.2500,134.4000,134.5500,134.7000,134.8500,135.0000,135.1500,135.3000,135.4500,135.6000,135.7500,135.9000,136.0500,136.2000,136.3500,136.5000,136.6500,136.8000,136.9500,137.1000,137.2500,137.4000,137.5500,137.7000,137.8500,138.0000,138.1500,138.3000,138.4500,138.6000,138.7500,138.9000,139.0500,139.2000,139.3500,139.5000,139.6500,139.8000,139.9500,140.1000,140.2500,140.4000,140.5500,140.7000,140.8500,141.0000,141.1500,141.3000,141.4500,141.6000,141.7500,141.9000,142.0500,142.2000,142.3500,142.5000,142.6500,142.8000,142.9500,143.1000,143.2500,143.4000,143.5500,143.7000,143.8500,144.0000,144.1500,144.3000,144.4500,144.6000,144.7500,144.9000,145.0500,145.2000,145.3500,145.5000,145.6500,145.8000,145.9500,146.1000,146.2500,146.4000,146.5500,146.7000,146.8500,147.0000,147.1500,147.3000,147.4500,147.6000,147.7500,147.9000,148.0500,148.2000,148.3500,148.5000,148.6500,148.8000,148.9500,149.1000,149.2500,149.4000,149.5500,149.7000,149.8500,150.0000,150.1500,150.3000,150.4500,150.6000,150.7500,150.9000,151.0500,151.2000,151.3500,151.5000,151.6500,151.8000,151.9500,152.1000,152.2500,152.4000,152.5500,152.7000,152.8500,153.0000,153.1500,153.3000,153.4500,153.6000,153.7500,153.9000,154.0500,154.2000,154.3500,154.5000,154.6500,154.8000,154.9500,155.1000,155.2500,155.4000,155.5500,155.7000,155.8500,156.0000,156.1500,156.3000,156.4500,156.6000,156.7500,156.9000,157.0500,157.2000,157.3500,157.5000,157.6500,157.8000,157.9500,158.1000,158.2500,158.4000,158.5500,158.7000,158.8500,159.0000,159.1500,159.3000,159.4500,159.6000,159.7500,159.9000,160.0500,160.2000,160.3500,160.5000,160.6500,160.8000,160.9500,161.1000,161.2500,161.4000,161.5500,161.7000,161.8500,162.0000,162.1500,162.3000,162.4500,162.6000,162.7500,162.9000,163.0500,163.2000,163.3500,163.5000,163.6500,163.8000,163.9500,164.1000,164.2500,164.4000,164.5500,164.7000,164.8500,165.0000,165.1500,165.3000,165.4500,165.6000,165.7500,165.9000,166.0500,166.2000,166.3500,166.5000,166.6500,166.8000,166.9500,167.1000,167.2500,167.4000,167.5500,167.7000,167.8500,168.0000,168.1500,168.3000,168.4500,168.6000,168.7500,168.9000,169.0500,169.2000,169.3500,169.5000,169.6500,169.8000,169.9500,170.1000,170.2500,170.4000,170.5500,170.7000,170.8500,171.0000,171.1500,171.3000,171.4500,171.6000,171.7500,171.9000,172.0500,172.2000,172.3500,172.5000,172.6500,172.8000,172.9500,173.1000,173.2500,173.4000,173.5500,173.7000,173.8500,174.0000,174.1500,174.3000,174.4500,174.6000,174.7500,174.9000,175.0500,175.2000,175.3500,175.5000,175.6500,175.8000,175.9500,176.1000,176.2500,176.4000,176.5500,176.7000,176.8500,177.0000,177.1500,177.3000,177.4500,177.6000,177.7500,177.9000,178.0500,178.2000,178.3500,178.5000,178.6500,178.8000,178.9500,179.1000,179.2500,179.4000,179.5500,179.7000,179.8500,180.0000];
  var latitudeArray = [-90,-89.8500,-89.7000,-89.5500,-89.4000,-89.2500,-89.1000,-88.9500,-88.8000,-88.6500,-88.5000,-88.3500,-88.2000,-88.0500,-87.9000,-87.7500,-87.6000,-87.4500,-87.3000,-87.1500,-87.0000,-86.8500,-86.7000,-86.5500,-86.4000,-86.2500,-86.1000,-85.9500,-85.8000,-85.6500,-85.5000,-85.3500,-85.2000,-85.0500,-84.9000,-84.7500,-84.6000,-84.4500,-84.3000,-84.1500,-84.0000,-83.8500,-83.7000,-83.5500,-83.4000,-83.2500,-83.1000,-82.9500,-82.8000,-82.6500,-82.5000,-82.3500,-82.2000,-82.0500,-81.9000,-81.7500,-81.6000,-81.4500,-81.3000,-81.1500,-81.0000,-80.8500,-80.7000,-80.5500,-80.4000,-80.2500,-80.1000,-79.9500,-79.8000,-79.6500,-79.5000,-79.3500,-79.2000,-79.0500,-78.9000,-78.7500,-78.6000,-78.4500,-78.3000,-78.1500,-78.0000,-77.8500,-77.7000,-77.5500,-77.4000,-77.2500,-77.1000,-76.9500,-76.8000,-76.6500,-76.5000,-76.3500,-76.2000,-76.0500,-75.9000,-75.7500,-75.6000,-75.4500,-75.3000,-75.1500,-75.0000,-74.8500,-74.7000,-74.5500,-74.4000,-74.2500,-74.1000,-73.9500,-73.8000,-73.6500,-73.5000,-73.3500,-73.2000,-73.0500,-72.9000,-72.7500,-72.6000,-72.4500,-72.3000,-72.1500,-72.0000,-71.8500,-71.7000,-71.5500,-71.4000,-71.2500,-71.1000,-70.9500,-70.8000,-70.6500,-70.5000,-70.3500,-70.2000,-70.0500,-69.9000,-69.7500,-69.6000,-69.4500,-69.3000,-69.1500,-69.0000,-68.8500,-68.7000,-68.5500,-68.4000,-68.2500,-68.1000,-67.9500,-67.8000,-67.6500,-67.5000,-67.3500,-67.2000,-67.0500,-66.9000,-66.7500,-66.6000,-66.4500,-66.3000,-66.1500,-66.0000,-65.8500,-65.7000,-65.5500,-65.4000,-65.2500,-65.1000,-64.9500,-64.8000,-64.6500,-64.5000,-64.3500,-64.2000,-64.0500,-63.9000,-63.7500,-63.6000,-63.4500,-63.3000,-63.1500,-63.0000,-62.8500,-62.7000,-62.5500,-62.4000,-62.2500,-62.1000,-61.9500,-61.8000,-61.6500,-61.5000,-61.3500,-61.2000,-61.0500,-60.9000,-60.7500,-60.6000,-60.4500,-60.3000,-60.1500,-60.0000,-59.8500,-59.7000,-59.5500,-59.4000,-59.2500,-59.1000,-58.9500,-58.8000,-58.6500,-58.5000,-58.3500,-58.2000,-58.0500,-57.9000,-57.7500,-57.6000,-57.4500,-57.3000,-57.1500,-57.0000,-56.8500,-56.7000,-56.5500,-56.4000,-56.2500,-56.1000,-55.9500,-55.8000,-55.6500,-55.5000,-55.3500,-55.2000,-55.0500,-54.9000,-54.7500,-54.6000,-54.4500,-54.3000,-54.1500,-54.0000,-53.8500,-53.7000,-53.5500,-53.4000,-53.2500,-53.1000,-52.9500,-52.8000,-52.6500,-52.5000,-52.3500,-52.2000,-52.0500,-51.9000,-51.7500,-51.6000,-51.4500,-51.3000,-51.1500,-51.0000,-50.8500,-50.7000,-50.5500,-50.4000,-50.2500,-50.1000,-49.9500,-49.8000,-49.6500,-49.5000,-49.3500,-49.2000,-49.0500,-48.9000,-48.7500,-48.6000,-48.4500,-48.3000,-48.1500,-48.0000,-47.8500,-47.7000,-47.5500,-47.4000,-47.2500,-47.1000,-46.9500,-46.8000,-46.6500,-46.5000,-46.3500,-46.2000,-46.0500,-45.9000,-45.7500,-45.6000,-45.4500,-45.3000,-45.1500,-45.0000,-44.8500,-44.7000,-44.5500,-44.4000,-44.2500,-44.1000,-43.9500,-43.8000,-43.6500,-43.5000,-43.3500,-43.2000,-43.0500,-42.9000,-42.7500,-42.6000,-42.4500,-42.3000,-42.1500,-42.0000,-41.8500,-41.7000,-41.5500,-41.4000,-41.2500,-41.1000,-40.9500,-40.8000,-40.6500,-40.5000,-40.3500,-40.2000,-40.0500,-39.9000,-39.7500,-39.6000,-39.4500,-39.3000,-39.1500,-39.0000,-38.8500,-38.7000,-38.5500,-38.4000,-38.2500,-38.1000,-37.9500,-37.8000,-37.6500,-37.5000,-37.3500,-37.2000,-37.0500,-36.9000,-36.7500,-36.6000,-36.4500,-36.3000,-36.1500,-36.0000,-35.8500,-35.7000,-35.5500,-35.4000,-35.2500,-35.1000,-34.9500,-34.8000,-34.6500,-34.5000,-34.3500,-34.2000,-34.0500,-33.9000,-33.7500,-33.6000,-33.4500,-33.3000,-33.1500,-33.0000,-32.8500,-32.7000,-32.5500,-32.4000,-32.2500,-32.1000,-31.9500,-31.8000,-31.6500,-31.5000,-31.3500,-31.2000,-31.0500,-30.9000,-30.7500,-30.6000,-30.4500,-30.3000,-30.1500,-30.0000,-29.8500,-29.7000,-29.5500,-29.4000,-29.2500,-29.1000,-28.9500,-28.8000,-28.6500,-28.5000,-28.3500,-28.2000,-28.0500,-27.9000,-27.7500,-27.6000,-27.4500,-27.3000,-27.1500,-27.0000,-26.8500,-26.7000,-26.5500,-26.4000,-26.2500,-26.1000,-25.9500,-25.8000,-25.6500,-25.5000,-25.3500,-25.2000,-25.0500,-24.9000,-24.7500,-24.6000,-24.4500,-24.3000,-24.1500,-24.0000,-23.8500,-23.7000,-23.5500,-23.4000,-23.2500,-23.1000,-22.9500,-22.8000,-22.6500,-22.5000,-22.3500,-22.2000,-22.0500,-21.9000,-21.7500,-21.6000,-21.4500,-21.3000,-21.1500,-21.0000,-20.8500,-20.7000,-20.5500,-20.4000,-20.2500,-20.1000,-19.9500,-19.8000,-19.6500,-19.5000,-19.3500,-19.2000,-19.0500,-18.9000,-18.7500,-18.6000,-18.4500,-18.3000,-18.1500,-18.0000,-17.8500,-17.7000,-17.5500,-17.4000,-17.2500,-17.1000,-16.9500,-16.8000,-16.6500,-16.5000,-16.3500,-16.2000,-16.0500,-15.9000,-15.7500,-15.6000,-15.4500,-15.3000,-15.1500,-15.0000,-14.8500,-14.7000,-14.5500,-14.4000,-14.2500,-14.1000,-13.9500,-13.8000,-13.6500,-13.5000,-13.3500,-13.2000,-13.0500,-12.9000,-12.7500,-12.6000,-12.4500,-12.3000,-12.1500,-12.0000,-11.8500,-11.7000,-11.5500,-11.4000,-11.2500,-11.1000,-10.9500,-10.8000,-10.6500,-10.5000,-10.3500,-10.2000,-10.0500,-9.9000,-9.7500,-9.6000,-9.4500,-9.3000,-9.1500,-9.0000,-8.8500,-8.7000,-8.5500,-8.4000,-8.2500,-8.1000,-7.9500,-7.8000,-7.6500,-7.5000,-7.3500,-7.2000,-7.0500,-6.9000,-6.7500,-6.6000,-6.4500,-6.3000,-6.1500,-6.0000,-5.8500,-5.7000,-5.5500,-5.4000,-5.2500,-5.1000,-4.9500,-4.8000,-4.6500,-4.5000,-4.3500,-4.2000,-4.0500,-3.9000,-3.7500,-3.6000,-3.4500,-3.3000,-3.1500,-3.0000,-2.8500,-2.7000,-2.5500,-2.4000,-2.2500,-2.1000,-1.9500,-1.8000,-1.6500,-1.5000,-1.3500,-1.2000,-1.0500,-0.9000,-0.7500,-0.6000,-0.4500,-0.3000,-0.1500,0.0000,0.1500,0.3000,0.4500,0.6000,0.7500,0.9000,1.0500,1.2000,1.3500,1.5000,1.6500,1.8000,1.9500,2.1000,2.2500,2.4000,2.5500,2.7000,2.8500,3.0000,3.1500,3.3000,3.4500,3.6000,3.7500,3.9000,4.0500,4.2000,4.3500,4.5000,4.6500,4.8000,4.9500,5.1000,5.2500,5.4000,5.5500,5.7000,5.8500,6.0000,6.1500,6.3000,6.4500,6.6000,6.7500,6.9000,7.0500,7.2000,7.3500,7.5000,7.6500,7.8000,7.9500,8.1000,8.2500,8.4000,8.5500,8.7000,8.8500,9.0000,9.1500,9.3000,9.4500,9.6000,9.7500,9.9000,10.0500,10.2000,10.3500,10.5000,10.6500,10.8000,10.9500,11.1000,11.2500,11.4000,11.5500,11.7000,11.8500,12.0000,12.1500,12.3000,12.4500,12.6000,12.7500,12.9000,13.0500,13.2000,13.3500,13.5000,13.6500,13.8000,13.9500,14.1000,14.2500,14.4000,14.5500,14.7000,14.8500,15.0000,15.1500,15.3000,15.4500,15.6000,15.7500,15.9000,16.0500,16.2000,16.3500,16.5000,16.6500,16.8000,16.9500,17.1000,17.2500,17.4000,17.5500,17.7000,17.8500,18.0000,18.1500,18.3000,18.4500,18.6000,18.7500,18.9000,19.0500,19.2000,19.3500,19.5000,19.6500,19.8000,19.9500,20.1000,20.2500,20.4000,20.5500,20.7000,20.8500,21.0000,21.1500,21.3000,21.4500,21.6000,21.7500,21.9000,22.0500,22.2000,22.3500,22.5000,22.6500,22.8000,22.9500,23.1000,23.2500,23.4000,23.5500,23.7000,23.8500,24.0000,24.1500,24.3000,24.4500,24.6000,24.7500,24.9000,25.0500,25.2000,25.3500,25.5000,25.6500,25.8000,25.9500,26.1000,26.2500,26.4000,26.5500,26.7000,26.8500,27.0000,27.1500,27.3000,27.4500,27.6000,27.7500,27.9000,28.0500,28.2000,28.3500,28.5000,28.6500,28.8000,28.9500,29.1000,29.2500,29.4000,29.5500,29.7000,29.8500,30.0000,30.1500,30.3000,30.4500,30.6000,30.7500,30.9000,31.0500,31.2000,31.3500,31.5000,31.6500,31.8000,31.9500,32.1000,32.2500,32.4000,32.5500,32.7000,32.8500,33.0000,33.1500,33.3000,33.4500,33.6000,33.7500,33.9000,34.0500,34.2000,34.3500,34.5000,34.6500,34.8000,34.9500,35.1000,35.2500,35.4000,35.5500,35.7000,35.8500,36.0000,36.1500,36.3000,36.4500,36.6000,36.7500,36.9000,37.0500,37.2000,37.3500,37.5000,37.6500,37.8000,37.9500,38.1000,38.2500,38.4000,38.5500,38.7000,38.8500,39.0000,39.1500,39.3000,39.4500,39.6000,39.7500,39.9000,40.0500,40.2000,40.3500,40.5000,40.6500,40.8000,40.9500,41.1000,41.2500,41.4000,41.5500,41.7000,41.8500,42.0000,42.1500,42.3000,42.4500,42.6000,42.7500,42.9000,43.0500,43.2000,43.3500,43.5000,43.6500,43.8000,43.9500,44.1000,44.2500,44.4000,44.5500,44.7000,44.8500,45.0000,45.1500,45.3000,45.4500,45.6000,45.7500,45.9000,46.0500,46.2000,46.3500,46.5000,46.6500,46.8000,46.9500,47.1000,47.2500,47.4000,47.5500,47.7000,47.8500,48.0000,48.1500,48.3000,48.4500,48.6000,48.7500,48.9000,49.0500,49.2000,49.3500,49.5000,49.6500,49.8000,49.9500,50.1000,50.2500,50.4000,50.5500,50.7000,50.8500,51.0000,51.1500,51.3000,51.4500,51.6000,51.7500,51.9000,52.0500,52.2000,52.3500,52.5000,52.6500,52.8000,52.9500,53.1000,53.2500,53.4000,53.5500,53.7000,53.8500,54.0000,54.1500,54.3000,54.4500,54.6000,54.7500,54.9000,55.0500,55.2000,55.3500,55.5000,55.6500,55.8000,55.9500,56.1000,56.2500,56.4000,56.5500,56.7000,56.8500,57.0000,57.1500,57.3000,57.4500,57.6000,57.7500,57.9000,58.0500,58.2000,58.3500,58.5000,58.6500,58.8000,58.9500,59.1000,59.2500,59.4000,59.5500,59.7000,59.8500,60.0000,60.1500,60.3000,60.4500,60.6000,60.7500,60.9000,61.0500,61.2000,61.3500,61.5000,61.6500,61.8000,61.9500,62.1000,62.2500,62.4000,62.5500,62.7000,62.8500,63.0000,63.1500,63.3000,63.4500,63.6000,63.7500,63.9000,64.0500,64.2000,64.3500,64.5000,64.6500,64.8000,64.9500,65.1000,65.2500,65.4000,65.5500,65.7000,65.8500,66.0000,66.1500,66.3000,66.4500,66.6000,66.7500,66.9000,67.0500,67.2000,67.3500,67.5000,67.6500,67.8000,67.9500,68.1000,68.2500,68.4000,68.5500,68.7000,68.8500,69.0000,69.1500,69.3000,69.4500,69.6000,69.7500,69.9000,70.0500,70.2000,70.3500,70.5000,70.6500,70.8000,70.9500,71.1000,71.2500,71.4000,71.5500,71.7000,71.8500,72.0000,72.1500,72.3000,72.4500,72.6000,72.7500,72.9000,73.0500,73.2000,73.3500,73.5000,73.6500,73.8000,73.9500,74.1000,74.2500,74.4000,74.5500,74.7000,74.8500,75.0000,75.1500,75.3000,75.4500,75.6000,75.7500,75.9000,76.0500,76.2000,76.3500,76.5000,76.6500,76.8000,76.9500,77.1000,77.2500,77.4000,77.5500,77.7000,77.8500,78.0000,78.1500,78.3000,78.4500,78.6000,78.7500,78.9000,79.0500,79.2000,79.3500,79.5000,79.6500,79.8000,79.9500,80.1000,80.2500,80.4000,80.5500,80.7000,80.8500,81.0000,81.1500,81.3000,81.4500,81.6000,81.7500,81.9000,82.0500,82.2000,82.3500,82.5000,82.6500,82.8000,82.9500,83.1000,83.2500,83.4000,83.5500,83.7000,83.8500,84.0000,84.1500,84.3000,84.4500,84.6000,84.7500,84.9000,85.0500,85.2000,85.3500,85.5000,85.6500,85.8000,85.9500,86.1000,86.2500,86.4000,86.5500,86.7000,86.8500,87.0000,87.1500,87.3000,87.4500,87.6000,87.7500,87.9000,88.0500,88.2000,88.3500,88.5000,88.6500,88.8000,88.9500,89.1000,89.2500,89.4000,89.5500,89.7000,89.8500,90.0000];*/


  //create arrays of lat and longitude across world:
  var interval = .15 //.15 degrees is about 10 miles in latitude
  var longitudeArray = [];
  var latitudeArray = [];

  var longStart = -180.0000;
  longitudeArray.push(longStart);
  var latStart = -90.0000;
  latitudeArray.push(latStart);

  //create long array:
  while (longStart <= 180) {
    longStart = (longStart + (interval * 2)); //multiply by 2 to make squarical
    longitudeArray.push(longStart.toFixed(4));
  }
  //create array of north values:
  var north = [];
  var start = 0;
  var quadraticEase = .0000025; //value to increment every loop run
  while (start <= 90){
    north.push(start);
    interval -= quadraticEase;
    start += (interval);
    if (interval <= 0) {break;}
  }
  //push last lat
  north.push(90);
  //create the array of south stuff, then reverse it and join it
  var south = north.slice(1,north.length); //cut off the 0
  //this is dumb, wish I knew array methods better
  for (var i = 0; i < south.length; i++){
    south[i] *= -1;
  }
  south.reverse();
  latitudeArray = south.concat(north);
  console.log(latitudeArray);
  //create lat array:
  /*while (latStart <= 90) {
    latStart = (latStart + interval);
    latitudeArray.push(latStart.toFixed(4));
  }*/

  var userPosition = getPosition();
  function getPosition(){
    console.log("Checking navigator");
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
      }
      function successFunction(position) {
        console.log("Navigator success");
        returnParcel(position);
        //return position;
      }
      function errorFunction(){
        alert("Geocoder failed");
      }

  }
  function returnParcel(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    var latBounds = [];
    var longBounds = [];
    console.log(lat, long);
    //go through and find high and low bounds, push them to lat/long bounds.
    //first value in each array is upper bound, second value is lower
    for (var i = 0; i < latitudeArray.length; i++) {
      if (latitudeArray[i] > lat){
        latBounds.push(latitudeArray[i]);
        latBounds.push(latitudeArray[i-1]);
        break;
      }
      //error if reach last value
      else if (latitudeArray[i] >= 90){
        console.log("cannot find latitude");
      }
    }
    for (var i = 0; i < longitudeArray.length; i++) {
      if (longitudeArray[i] > long){
        longBounds.push(longitudeArray[i]);
        longBounds.push(longitudeArray[i-1]);
        break;
      }
      else if (longitudeArray[i] >= 180){
        console.log("cannot find longitude");
      }
    }
    console.log(longBounds, latBounds);
    //start creating the corners of the rectangle
    var upperLeft = [longBounds[0],latBounds[1]]; //lowest long, highest lat (northwest)
    var upperRight = [longBounds[1],latBounds[1]]; //highest long, highest lat (northeast)
    var bottomRight = [longBounds[1],latBounds[0]]; //highest long, lowest lat (southeast)
    var bottomLeft = [longBounds[0],latBounds[0]]; //lowest long, lowest lat (southwest)

    //I think the reason they require longitude first for GeoJSON Objects
    //is because it is the X axis whereas latitude represents coordinates
    //on the y axis (x,y)
    console.log(upperLeft, upperRight, bottomRight, bottomLeft);
    var polyParcel = '{"type":"Polygon","coordinates": [[['+upperLeft + '], [' + upperRight+ '], [' +  bottomRight+ '], [' +  bottomLeft+'],['+upperLeft + ']]]}'; //must close polygon with upperleft
    var userPoint = '{"type":"Point", "coordinates": ['+long+','+lat+']}';
    $('#demo').text('Parcel: ' + polyParcel);
    $('#demo').append('<br>');
    $('#demo').append('user coord: ' + userPoint);
    $('#demo').append('<br>');
    var parcelObj = '{"type": "FeatureCollection", "features": [{"type": "Feature","properties":{},"geometry": '+polyParcel+'},{"type": "Feature","properties": {},"geometry": '+userPoint+'}]}';
    $('#demo').append('copy the next line:<br>');
    $('#demo').append(parcelObj + '<br>');
    $('#demo').append('<a target="_blank" href="http://geojson.io">And paste it here: GeoJSON</a>');
  }
  //$('#getPosition').click(function() {getPosition();});

});
