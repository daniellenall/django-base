from django.views.generic import TemplateView

class HomePageView(TemplateView):
    def get_context_data(self, **kwargs):
        # Call the base implementation first to get a context
        context = super().get_context_data(**kwargs)
        context['title'] = "Homepage"
        return context
    template_name = "index.html"