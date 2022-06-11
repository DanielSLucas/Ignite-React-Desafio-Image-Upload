import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    // TODO MODAL WITH IMAGE AND EXTERNAL LINK
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent display="flex" bgColor="pGray.800">
        <ModalBody h="fit-content" w="fit-content" maxW={900} maxH={600}>
          <Image src={imgUrl} objectFit="cover" />
        </ModalBody>

        <ModalFooter alignSelf="flex-start">
          <Link href={imgUrl} isExternal>
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
