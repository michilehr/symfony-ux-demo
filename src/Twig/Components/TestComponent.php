<?php

namespace App\Twig\Components;

use App\Form\Type\TestType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\FormInterface;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\ComponentToolsTrait;
use Symfony\UX\LiveComponent\ComponentWithFormTrait;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent(template: 'components/test.html.twig')]
class TestComponent extends AbstractController
{
    use DefaultActionTrait;
    use ComponentToolsTrait;
    use ComponentWithFormTrait;

    #[LiveAction]
    public function submit(): void
    {
        $this->submitForm();
        $this->resetForm();
    }

    protected function instantiateForm(): FormInterface
    {
        return $this->createForm(TestType::class);
    }

    private function getDataModelValue(): ?string
    {
        return 'norender|*';
    }
}
