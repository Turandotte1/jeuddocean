import numpy as np
from scipy import ndimage
import pandas as pd
import matplotlib.pyplot as plt
import argparse
import cv2

ARGS = None

def read_image():
    while(video.isOpened()):
        ret, frame = video.read()
        if ret == True:
      #      for (lower, upper) in limits:
                '''

                ret, thresh = cv2.threshold(hsv, 127, 255, cv2.THRESH_BINARY_INV)
                kernel = np.ones((1,1), np.uint8)
                img_dilation = cv2.dilate(thresh, kernel, iterations=1)
                cv2.imshow('dilated', img_dilation)

                ctrs,hier = cv2.findContours(img_dilation.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
                sorted_ctrs = sorted(ctrs, key=lambda ctr: cv2.boundingRect(ctr)[0])
                '''
                #hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

                blue = np.array([200, 70, 60])
                red = np.array([30, 20, 220])

                isblue = cv2.inRange(frame, blue, blue+20)
                isred = cv2.inRange(frame, red, red+20) > 0

                labels, count = ndimage.label(~isblue)
                loc = np.where(labels >= 2)

                df = pd.DataFrame({"y":loc[0], "x":loc[1], "label":labels[loc], "isred":isred[loc]})
                grid = df.groupby("label").mean().sort_values("y")

                res = grid.groupby((grid.y.diff().fillna(0) > 10).cumsum()).apply(f)
                print((res.isred.unstack(1) > 0).astype(np.uint8))
                #cv2.imshow("frame is", frame)
                if cv2.waitKey(1) & 0xFF == ord('q'):
                   print 'Exiting ...'
                   break
    video.release()
    cv2.destroyAllWindows()

def f(df):
    return df.sort_values("x").reset_index(drop=True)


                #limit de rouge

            #    mask1 = cv2.inRange(hsv, (0,50,20), (5,255,255))
            #    mask2 = cv2.inRange(hsv, (175,50,20), (180,255,255))

            #    if (mask1 & mask2):
                #mask = cv2.bitwise_or(mask1, mask2)
                #croped = cv2.bitwise_and(frame, frame, mask = mask)

                #cv2.imshow('mask is', mask)
                #cv2.imshow('croped is', croped)

def main():
    ret, frame = read_image()

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument("-v", "--video", help = "path to the video")

    ARGS = vars(parser.parse_args())
    video = cv2.VideoCapture(ARGS["video"])
    if (video.isOpened() == False):
        print '[Error] - cannot open properly the video'
    main()
