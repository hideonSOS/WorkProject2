import pandas as pd 

df = pd.read_csv('csv/Motor.csv',encoding='shift-jis', header=9)
df.columns = [i for i in range(len(df.columns))]
df1=df.drop(df.columns[[1,2,3,16,17,18,19,20,21,22,23,24,25,29]],axis=1)
df1.columns = [i for i in range(len(df1.columns))]
cl = ['MotorNo','RenOne','RenTwo','RenThree','One','Two','Three','Four','Five','Six','TotalRun','Score','1','2','3','RapTime']
df1.columns=cl 

def return_dict():
	dict = df1.to_dict('records')
	return dict