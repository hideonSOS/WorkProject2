from django.urls import path, include
from . import views


urlpatterns=[
    path('', views.home),
    path('logout/', views.Logout.as_view(), name='logout'),
    path('login/', views.Login.as_view(), name='login'),
    path('page1/', views.page1, name='page1'),
    path('page2/', views.page2, name='page2'),
    path('page3/', views.page3, name='page3'),
    path('page4/', views.page4, name='page4'),
    path('page5/', views.page5, name='page5'),
    path('page6/', views.page6, name='page6'),
    path('page7/', views.page7, name='page7'),
    path('page8/', views.page8, name='page8'),
]