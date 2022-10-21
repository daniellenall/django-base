#Reference: https://docs.djangoproject.com/en/1.9/ref/templates/api/#writing-your-own-context-processors 


def contexts(request):
    context = {
        "site_title": "Django Templates"
    }
    
    return context