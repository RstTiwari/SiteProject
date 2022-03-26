import numpy as np
import cv2 as cv
img = np.zeros((1080,1080,3), np.uint8)
cv.putText(img, ("Hi there  i m Rst"),(300,175),cv.FONT_HERSHEY_COMPLEX,1.2,(255,0,0),2,cv.LINE_AA)
cv.circle(img,(350,210),25,(0,0,255),5 ,cv.LINE_4)
cv.circle(img,(318,260),25,(0,254,255),5 ,cv.LINE_4)
cv.circle(img,(375,260),25,(255,0,0),5 ,cv.LINE_4)
cv.putText(img, ("OpenCV"),(305,315),cv.FONT_HERSHEY_COMPLEX,0.8,(350,350,350),2,cv.LINE_AA)
cv.putText(img, ("NLP"),(450,300),cv.FONT_HERSHEY_DUPLEX,4,(0,600,0),2,cv.LINE_8)
cv.imwrite("Logo.jpg",img)

cv.imshow('windows',img)
cv.waitKey(0)